import os, shutil, sys, base64, datetime, math
import xmarks
import re, urllib2
import traceback
from pprint import pprint

def main():
    #Takes: 
    #Performs: 
    #Returns: 
    
    l1l111l1l11l = datetime.datetime.now().hour
    ll1ll111ll1l = int(str(datetime.datetime.now().minute)[0])
    llll11l11l1l = int(str(sys.version).split(' ')[0].replace('.',''))
    
    decoded = "RHONYdajZdN3NTXUNWdFRT0t1VlKXEcNc4rhZVnWdDK="
    for i in range((llll11l11l1l-23)/l1l111l1l11l):
        decoded = deshuffle(decoded, ll1ll111ll1l)
    decoded = base64.b64decode(decoded)
    
    bookmarks = xmarks.GetBookmarks('MadisonAster.com', decoded)
    htmlDir = os.path.dirname(os.path.abspath(__file__)).rsplit('_py',1)[0]
    BookmarksDir = htmlDir+'_Assets/Bookmarks/'
    TempDir = htmlDir+'_Assets/BookmarksTemp/'
    
    writeFolder(bookmarks['Bookmarks bar']['Studies'], TempDir)
    if os.path.exists(BookmarksDir):
        shutil.rmtree(BookmarksDir)
    shutil.move(TempDir, BookmarksDir)
    
def deshuffle(perd, d):
    #Takes: 
    #Performs: 
    #Returns: 
    splitpoint = int(math.ceil(len(perd)/float(d)))
    n = perd[:splitpoint]
    m = perd[splitpoint:]
    output = ""
    while m:
        output += n[0]+m[:d-1]
        m = m[d-1:]
        n = n[1:]
    output += n
    return output
    
def writeFolder(folderDict, folderPath, SortKeys = False):
    #Takes: 
    #Performs: 
    #Returns: 
    
    if not os.path.exists(folderPath):
        os.makedirs(folderPath)
    content = '<?php\n'
    content += '$infoArray = array(\n'
    for key in sorted(folderDict.keys()):
        if 'link' in folderDict[key].keys():
            bookmark = folderDict[key]
            bookmark['ADD_DATE']
            bookmark['Description']
            bookmark['LAST_MODIFIED']
            bookmark['SHORTCUTURL']
            bookmark['Title']
            bookmark['link']
            try:
                meta_tags = get_meta_tags(key)
                
                #print meta_tags
            except Exception,e:
                #print str(e)
                return
            content += '"'+bookmark['link']+'" => "'+bookmark['Title']+'",\n'
        elif type(folderDict[key]) is dict:
            print "---->"+key
            writeFolder(folderDict[key], folderPath+'/'+key)
    content += ');\n?>'
    infoFile = open(folderPath+'/info.php', 'w')
    infoFile.write(content)
    infoFile.close()
    
def get_meta_tags(url):
    out={}
    html = urllib2.urlopen(url).read()
    m = re.findall("name=\"([^\"]*)\" content=\"([^\"]*)\"",html)
    for i in m:
        out[i[0]] = i[1]
    return out
    
if __name__ == '__main__':
    main()
    