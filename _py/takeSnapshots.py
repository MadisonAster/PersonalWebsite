import os, re, urllib2
import datetime, sys


def main():
    #Takes:
    #Performs: calls to getAndSanitizeHTML, downloadFiles_SaveHTML
    #Returns:
    
    htmlDir = os.path.dirname(os.path.abspath(__file__)).rsplit('_py',1)[0]
    
    html = getAndSanitizeHTML('http://www.imdb.com/name/nm4807696')    
    downloadFiles_SaveHTML(html, htmlDir+'IMDB/snapshot')
    
    html = getAndSanitizeHTML('http://github.com/ThomasMcVay')
    expression = re.compile('<img.*?src=[\'"].*?9937336.*?[\'"]')
    html = linkreplace(expression, '9937336.jpg', html)
    downloadFiles_SaveHTML(html, htmlDir+'GitHub/snapshot')
    
def downloadFiles_SaveHTML(html, folder):
    #Takes: html as html string, folder as path to snapshot folder
    #Performs: downloads image files to folder if they don't exist, saves index.html to folder, deletes any files not referenced in html
    #Returns:
    
    outputpath = folder+'/index.html'
    ExistingImages = os.listdir(folder)
    ExistingImages.remove('index.html')
    
    images = html.split('<img')[1:]
    imgURLs = []
    imgNames = []
    for a in images:
        imgURLs.append(a.split('src="',1)[1].split('"',1)[0])
        imgNames.append(a.split('src="',1)[1].split('"',1)[0].rsplit('/',1)[-1])
    for url, fileName in zip(imgURLs, imgNames):
        if fileName not in ExistingImages:
            imgFile = urllib2.urlopen(url)
            fileObject = open(folder+'/'+fileName, 'wb')
            fileObject.write(imgFile.read())
            fileObject.close()
        html = html.replace(url, fileName)
        
    file = open(outputpath, 'w')
    file.write(html)
    file.close()
    
    for ExistingImage in ExistingImages:
        if ExistingImage not in imgNames:
            os.remove(folder+'/'+ExistingImage)

def getAndSanitizeHTML(url):
    #Takes: url as valid public url
    #Performs: downloads html response from server
    #Returns: html as str
    
    domain = url.strip('http://')
    domain = domain.strip('https://')
    domain = 'http://'+domain.split('/',1)[0]+'/'
    
    response = urllib2.urlopen(url)
    html = response.read()

    expression = re.compile('<script.*?/script>', flags=re.DOTALL)
    html = re.sub(expression, '', html)

    expression = re.compile('<iframe.*?/iframe>', flags=re.DOTALL)
    html = re.sub(expression, '', html)
    
    html = html.replace('href="/', 'href="'+domain)
    html = html.replace("href='/", "href='"+domain)
    
    expression = re.compile('action=[\'"]/.*?[\'"]')
    html = re.sub(expression, 'action="'+url+'"', html)
    
    
    return html
    
def linkreplace(expression, replaceString, inputString):
    #Takes: expression as compiled re object, replaceString as str, inputString as str to replace html link in
    #Performs: replaces entire string of last quoted tag, try an expression like: '<img.*?src=[\'"].*?[\'"]' to replace src of img element
    #Returns: inputString with link replaced
    def matchswap(matchobject):
        subexp = re.compile('[\'"].*?[\'"]')
        matchiterator = re.finditer(subexp, matchobject.group())
        for match in matchiterator:
            subobject = match
        return matchobject.group()[:subobject.start()+1]+replaceString+matchobject.group()[subobject.end()-1]
    return re.sub(expression, matchswap, inputString)
    
if __name__ == '__main__':
    main()