import os, re, urllib2
import datetime, sys
from pprint import pprint

def main():
    #Takes:
    #Performs: calls to getAndSanitizeHTML, downloadFiles_SaveHTML
    #Returns:
    
    htmlDir = os.path.dirname(os.path.abspath(__file__)).rsplit('_py',1)[0]
    #GetIMDB('http://www.imdb.com/name/nm4807696', htmlDir+'IMDB/snapshot')
    #GetGitHub('http://github.com/MadisonAster', htmlDir+'GitHub/snapshot')
    #GetGitHub('https://www.linkedin.com/in/madisonaster/', htmlDir+'LinkedIn/snapshot')
    GetCodeWars('https://www.codewars.com/users/MadisonAster', htmlDir+'CodeWars/snapshot')
    
    
    
    
def GetElementsBySearchString(html, SearchString):
    sections = html.split(SearchString)
    for i in range(html.count(SearchString)):
        left = sections[i].rsplit('<',1)[-1]
        right = sections[i+1].split('>',1)[0]
        StringElement = '<'+left+SearchString+right+'>'
        yield StringElement

def GetAttrValueFromStringElement(StringElement, AttributeName):
    a = StringElement.split(AttributeName,1)[-1]
    b = a.split('=',1)[-1]
    c = b.strip(' ')
    if c[0] in ['"', "'"]:
        return  c[1:].split(c[0],1)[0]
    else:
        return c
        
        
        
def GetCodeWars(url, SnapshotFolder):
    #Takes: url as valid public url
    #Performs: downloads html response from server
    #Returns: html as str
    
    #########################Load HTML############################
    domain = url.strip('http://')
    domain = domain.strip('https://')
    domain = 'https://'+domain.split('/',1)[0]+'/'
    
    response = urllib2.urlopen(url)
    html = response.read()

    expression = re.compile('<script.*?/script>', flags=re.DOTALL)
    html = re.sub(expression, '', html)

    expression = re.compile('<iframe.*?/iframe>', flags=re.DOTALL)
    html = re.sub(expression, '', html)
    ###############################################################
    
    
    ###################Sanitize HTML text##########################
    html = html.replace('href="/', 'href="'+domain)
    html = html.replace("href='/", "href='"+domain)
    html = html.replace("<a", "<a target='_blank'")
    
    expression = re.compile('action=[\'"]/.*?[\'"]')
    html = re.sub(expression, 'action="'+url+'"', html)
    
    #html = html.replace('http:', 'https:')
    ###############################################################
    
    ####################Clear Snapshot Folder######################
    for filename in os.listdir(SnapshotFolder):
        os.remove(SnapshotFolder+'/'+filename)
    ###############################################################
    
    #########################Save Images###########################
    images = html.split('<img')[1:]
    for i, a in enumerate(images):
        imgURL = a.split('src="',1)[1].split('"',1)[0]
        imgExt = imgURL.rsplit('.',1)[-1]
        if len(imgExt) > 5:
            print('imgURL', imgURL)
            if 'github' in imgURL:
                imgExt = 'jfif'
            else:
                imgExt = 'svg'
        if imgURL != '' and imgExt != '': #Do better filename validity check here
            imgName = 'image_'+str(i).zfill(3)+'.'+imgExt
            html = html.replace(imgURL, imgName)
            if imgURL[0] == '/':
                imgURL = domain.rstrip('/')+imgURL
            imgFile = urllib2.urlopen(imgURL)
            fileObject = open(SnapshotFolder+'/'+imgName, 'wb')
            fileObject.write(imgFile.read())
            fileObject.close()
    ###############################################################
    
    #########################Save CSS##############################
    for i, LinkElement in enumerate(GetElementsBySearchString(html, 'rel="stylesheet"')):
        cssURL = GetAttrValueFromStringElement(LinkElement, 'href')
        if cssURL != '': #Do better filename validity check here
            cssName = 'css_'+str(i).zfill(3)+'.css'
            html = html.replace(cssURL, cssName)
            if cssURL[0] == '/':
                cssURL = domain+cssURL
            cssFile = urllib2.urlopen(cssURL)
            fileObject = open(SnapshotFolder+'/'+cssName, 'wb')
            fileObject.write(cssFile.read())
            fileObject.close()
    ###############################################################
    
    
    #####################create index.html#########################
    outputpath = SnapshotFolder+'/index.html'
    file = open(outputpath, 'w')
    file.write(html)
    file.close()
    ###############################################################

def GetGitHub(url, SnapshotFolder):
    #Takes: url as valid public url
    #Performs: downloads html response from server
    #Returns: html as str
    
    #########################Load HTML############################
    domain = url.strip('http://')
    domain = domain.strip('https://')
    domain = 'https://'+domain.split('/',1)[0]
    
    response = urllib2.urlopen(url)
    html = response.read()

    expression = re.compile('<script.*?/script>', flags=re.DOTALL)
    html = re.sub(expression, '', html)

    expression = re.compile('<iframe.*?/iframe>', flags=re.DOTALL)
    html = re.sub(expression, '', html)
    ###############################################################
    
    
    ###################Sanitize HTML text##########################
    html = html.replace('href="/', 'href="'+domain)
    html = html.replace("href='/", "href='"+domain)
    html = html.replace("<a", "<a target='_blank'")
    
    expression = re.compile('action=[\'"]/.*?[\'"]')
    html = re.sub(expression, 'action="'+url+'"', html)
    
    html = html.replace('http:', 'https:')
    ###############################################################
    
    
    #########################Save Images###########################
    for filename in os.listdir(SnapshotFolder):
        os.remove(SnapshotFolder+'/'+filename)
    images = html.split('<img')[1:]
    for i, a in enumerate(images):
        imgURL = a.split('src="',1)[1].split('"',1)[0]
        imgExt = imgURL.rsplit('.',1)[-1]
        if len(imgExt) > 5:
            imgExt = 'jfif'
        if imgURL != '' and imgExt != '': #Do better filename validity check here
            imgName = 'image_'+str(i).zfill(3)+'.'+imgExt
            html = html.replace(imgURL, imgName)
            if imgURL[0] == '/':
                imgURL = domain+imgURL
            imgFile = urllib2.urlopen(imgURL)
            fileObject = open(SnapshotFolder+'/'+imgName, 'wb')
            fileObject.write(imgFile.read())
            fileObject.close()
    ###############################################################
    
    
    #####################create index.html#########################
    outputpath = SnapshotFolder+'/index.html'
    file = open(outputpath, 'w')
    file.write(html)
    file.close()
    ###############################################################

def GetIMDB(url, SnapshotFolder):
    #Takes: url as valid public url
    #Performs: downloads html response from server
    #Returns: html as str
    
    #########################Load HTML############################
    domain = url.strip('http://')
    domain = domain.strip('https://')
    domain = 'https://'+domain.split('/',1)[0]+'/'
    
    response = urllib2.urlopen(url)
    html = response.read()

    expression = re.compile('<script.*?/script>', flags=re.DOTALL)
    html = re.sub(expression, '', html)

    expression = re.compile('<iframe.*?/iframe>', flags=re.DOTALL)
    html = re.sub(expression, '', html)
    ###############################################################
    
    
    ###################Sanitize HTML text##########################
    html = html.replace('href="/', 'href="'+domain)
    html = html.replace("href='/", "href='"+domain)
    html = html.replace("<a", "<a target='_blank'")
    
    html = html.replace(" - as Thomas McVay", "")
    if '<div id="details-akas"' in html:
        html2 = html.split('<div id="details-akas"',1)
        html = html2[0]+html2[1].split('</div>',1)[-1]
    html = html.replace("Thomas McVay", "")
    
    if '<nav' in html:
        html2 = html.split('<nav',1)
        html = html2[0]+html2[1].split('</nav>',1)[-1]
    
    '''
    if 'data-testid="panel"' in html:
        html0 = html.split('data-testid="panel"', 1)[0].rsplit('<div', 1)[0]
        html1 = html.split('data-testid="panel"', 1)[1]
        count = 0
        for i, section in enumerate(html1.split('<div')):
            count += section.count('/div')
            if count >= i+1:
                break
        print('count', count)
        count = i+1
        print('count', count)
        html1 = html.split('/div', count)[-1].split('>',1)[-1]
        
        html = html0+html1
    '''
    
    expression = re.compile('action=[\'"]/.*?[\'"]')
    html = re.sub(expression, 'action="'+url+'"', html)
    ###############################################################
    
    
    #########################Save Images###########################
    for filename in os.listdir(SnapshotFolder):
        os.remove(SnapshotFolder+'/'+filename)
    images = html.split('<img')[1:]
    for i, a in enumerate(images):
        imgURL = a.split('src="',1)[1].split('"',1)[0]
        imgExt = imgURL.rsplit('.',1)[-1]
        if imgURL != '' and imgExt != '': #Do better filename validity check here
            imgName = 'image_'+str(i).zfill(3)+'.'+imgExt
            imgFile = urllib2.urlopen(imgURL)
            fileObject = open(SnapshotFolder+'/'+imgName, 'wb')
            fileObject.write(imgFile.read())
            fileObject.close()
            html = html.replace(imgURL, imgName)
    ###############################################################
    
    
    #####################create index.html#########################
    outputpath = SnapshotFolder+'/index.html'
    file = open(outputpath, 'w')
    file.write(html)
    file.close()
    ###############################################################

    
if __name__ == '__main__':
    main()