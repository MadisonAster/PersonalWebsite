import sys, os, re
import urllib.request as urllib
import traceback
import datetime, time

def main(FunctionName, url, SnapshotFolder):
    #Takes:
    #Performs: calls to getAndSanitizeHTML, downloadFiles_SaveHTML
    #Returns:
    
    HtmlDir = os.path.dirname(os.path.abspath(__file__)).rsplit('_py',1)[0]
    
    if FunctionName == 'GetIMDB':
        GetIMDB(url, HtmlDir+SnapshotFolder)
    elif FunctionName == 'GetGitHub':
        GetGitHub(url, HtmlDir+SnapshotFolder)
    elif FunctionName == 'GetCodeWars':
        GetCodeWars(url, HtmlDir+SnapshotFolder)
    elif FunctionName == 'GetLinkedIn':
        GetLinkedIn(url, HtmlDir+SnapshotFolder)
    
    print('Snapshot Captured!')

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

def GetLinkedIn(url, SnapshotFolder):
    #Takes: url as valid public url
    #Performs: downloads html response from server
    #Returns: html as str
    return 
    #########################Load HTML############################
    domain = url.strip('http://')
    domain = domain.strip('https://')
    domain = 'https://'+domain.split('/',1)[0]+'/'
    
    #response = urllib.urlopen(url)
    #html = str(response.read())
    urlopener= urllib.build_opener()
    urlopener.addheaders = [('User-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0')]
    #html= urlopener.open(url).read()
    html= urlopener.open(url).read().decode('utf-8')
    #html= str(urlopener.open(url).read())
    
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
            if 'github' in imgURL:
                imgExt = 'jfif'
            else:
                imgExt = 'svg'
        if imgURL != '' and imgExt != '': #Do better filename validity check here
            imgName = 'image_'+str(i).zfill(3)+'.'+imgExt
            html = html.replace(imgURL, imgName)
            if imgURL[0] == '/':
                imgURL = domain.rstrip('/')+imgURL
            imgFile = urllib.urlopen(imgURL)
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
            cssFile = urllib.urlopen(cssURL)
            #cssText = cssFile.read()
            cssText = cssFile.read().decode('utf-8')
            #cssText = str(cssFile.read())
            
            for j in range(cssText.count('url(')):
                sections = cssText.split('url(')
                fileUrl = sections[j+1].split(')',1)[0]
                fileExt = fileUrl.rsplit('.',1)[-1]
                fileName = 'cssFile_'+str(i)+'_'+str(j)+'.'+fileExt
                if fileExt not in ['ttf', 'woff', '.svg#ico-moon']:
                    continue
                cssText = cssText.replace(fileUrl, fileName)
                if fileUrl[0] == '/':
                    fileUrl = domain+fileUrl
                
                fileHandle = urllib.urlopen(fileUrl)
                fileObject = open(SnapshotFolder+'/'+fileName, 'wb')
                fileObject.write(fileHandle.read())
                fileObject.close()
            
            fileObject = open(SnapshotFolder+'/'+cssName, 'wb')
            fileObject.write(cssText.encode('utf-8'))
            fileObject.close()
    ###############################################################
    
    
    #####################create index.html#########################
    outputpath = SnapshotFolder+'/index.html'
    file = open(outputpath, 'wb')
    file.write(html.encode('utf-8'))
    file.close()
    ###############################################################

def GetCodeWars(url, SnapshotFolder):
    #Takes: url as valid public url
    #Performs: downloads html response from server
    #Returns: html as str
    
    #########################Load HTML############################
    domain = url.strip('http://')
    domain = domain.strip('https://')
    domain = 'https://'+domain.split('/',1)[0]+'/'
    
    response = urllib.urlopen(url)
    #html = response.read()
    html = response.read().decode('utf-8')
    #html = str(response.read())

    expression = re.compile('<script.*?/script>', flags=re.DOTALL)
    html = re.sub(expression, '', html)

    expression = re.compile('<iframe.*?/iframe>', flags=re.DOTALL)
    html = re.sub(expression, '', html)
    
    html = html.replace('<body', '<body style="overflow:hidden;"')
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
            if 'github' in imgURL:
                imgExt = 'jfif'
            else:
                imgExt = 'svg'
        if imgURL != '' and imgExt != '': #Do better filename validity check here
            imgName = 'image_'+str(i).zfill(3)+'.'+imgExt
            html = html.replace(imgURL, imgName)
            if imgURL[0] == '/':
                imgURL = domain.rstrip('/')+imgURL
            imgFile = urllib.urlopen(imgURL)
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
            cssFile = urllib.urlopen(cssURL)
            #cssText = cssFile.read()
            cssText = cssFile.read().decode('utf-8')
            #cssText = str(cssFile.read())
            
            for j in range(cssText.count('url(')):
                sections = cssText.split('url(')
                fileUrl = sections[j+1].split(')',1)[0]
                fileExt = fileUrl.rsplit('.',1)[-1]
                fileName = 'cssFile_'+str(i)+'_'+str(j)+'.'+fileExt
                if fileExt not in ['ttf', 'woff', '.svg#ico-moon']:
                    continue
                cssText = cssText.replace(fileUrl, fileName)
                if fileUrl[0] == '/':
                    fileUrl = domain+fileUrl
                
                fileHandle = urllib.urlopen(fileUrl)
                fileObject = open(SnapshotFolder+'/'+fileName, 'wb')
                fileObject.write(fileHandle.read())
                fileObject.close()
            
            fileObject = open(SnapshotFolder+'/'+cssName, 'wb')
            fileObject.write(cssText.encode('utf-8'))
            fileObject.close()
    ###############################################################
    
    
    #####################create index.html#########################
    outputpath = SnapshotFolder+'/index.html'
    file = open(outputpath, 'wb')
    file.write(html.encode('utf-8'))
    file.close()
    ###############################################################

def GetGitHub(url, SnapshotFolder):
    #Takes: url as valid public url
    #Performs: downloads html response from server
    #Returns: html as str
    
    #########################Load HTML############################
    domain = url.strip('http://')
    domain = domain.strip('https://')
    domain = 'https://'+domain.split('/',1)[0]+'/'
    
    response = urllib.urlopen(url)
    #html = response.read()
    html = response.read().decode('utf-8')
    #html = str(response.read())

    expression = re.compile('<script.*?/script>', flags=re.DOTALL)
    html = re.sub(expression, '', html)

    expression = re.compile('<iframe.*?/iframe>', flags=re.DOTALL)
    html = re.sub(expression, '', html)
    
    html = html.replace('<body', '<body style="overflow:hidden;"')
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
                imgURL = domain.rstrip('/')+imgURL
            imgFile = urllib.urlopen(imgURL)
            fileObject = open(SnapshotFolder+'/'+imgName, 'wb')
            fileObject.write(imgFile.read())
            fileObject.close()
    ###############################################################
    
    
    #####################create index.html#########################
    outputpath = SnapshotFolder+'/index.html'
    file = open(outputpath, 'wb')
    file.write(html.encode('utf-8'))
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
    
    response = urllib.urlopen(url)
    #html = response.read()
    html = response.read().decode('utf-8')
    #html = str(response.read())

    expression = re.compile('<script.*?/script>', flags=re.DOTALL)
    html = re.sub(expression, '', html)

    expression = re.compile('<iframe.*?/iframe>', flags=re.DOTALL)
    html = re.sub(expression, '', html)
    
    html = html.replace('<body', '<body style="overflow:hidden;"')
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
            imgFile = urllib.urlopen(imgURL)
            fileObject = open(SnapshotFolder+'/'+imgName, 'wb')
            fileObject.write(imgFile.read())
            fileObject.close()
            html = html.replace(imgURL, imgName)
    ###############################################################
    
    
    #####################create index.html#########################
    outputpath = SnapshotFolder+'/index.html'
    file = open(outputpath, 'wb')
    file.write(html.encode('utf-8'))
    file.close()
    ###############################################################

if __name__ == '__main__':
    try:
        FunctionName = sys.argv[1]
        url = sys.argv[2]
        SnapshotFolder = sys.argv[3]
        main(FunctionName, url, SnapshotFolder)
    except:
        print(traceback.format_exc())