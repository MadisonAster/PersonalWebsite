#!/usr/bin/python
import cookielib
import datetime, time
import urllib
import urllib2
import re

def GetBookmarks(username, pd, dateObject = datetime.date.today()):
    #Takes: username as str, pd as str
    #Performs: downloads html from xmarks
    #Returns: dictionary of bookmarks parsed from html
    
    opener = login(username, pd)
    htmlString = download_bookmarks_html(opener, username, dateObject)
    logout(opener)
    
    htmlString = cleanHTML(htmlString)
    bookmarks = parseHTML(htmlString)
    return bookmarks

def login(username, pd):
    #Takes: username as str, pd as str
    #Performs: Login into Xmarks.
    #Returns: An URL opener with the right cookies set for accessing the logged in user's pages.
    url = 'https://login.xmarks.com/login/login'

    cookie_jar = cookielib.CookieJar()
    opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cookie_jar))

    # First get an authentication token from the login page.
    first_login_page = opener.open(url).read()
    auth_token_match = re.search(
        '<input type="hidden" name="token" value="([^"]*)" />',
        first_login_page)
    auth_token = auth_token_match.group(1)

    # Then authenticate for real.
    params = {'token': auth_token,
              'username': username,
              'password': pd}
    opener.open(url, urllib.urlencode(params)).read()

    return opener
def download_bookmarks_html(opener, username, date):
    #Takes: opener as An URL opener with the right cookies set for accessing the logged in user's pages, username as str, date as datetime.date specifying the snapshot of bookmarks to download.
    #Performs: Get the user's bookmarks as an HTML page.
    #Returns: A string containing all the user's bookmarks as a HTML page.
    
    url = 'https://my.xmarks.com/bookmarks/export_to_html/0/'+username+'-bookmarks-'+date.isoformat()+'.html'
    return opener.open(url).read()
def logout(opener):
    #Takes: opener as An URL opener with the right cookies set for accessing the logged in user's pages
    #Performs: Logout from Xmarks.
    #Returns:
    url = 'https://login.xmarks.com/logout'
    opener.open(url)
def cleanHTML(htmlString):
    #Takes: htmlString as str
    #Performs: cleans up html for parsing
    #Returns: htmlString as str
    htmlString = htmlString.split('<DL><p>\n',1)[-1]
    htmlString = re.sub('\n\s*<', '\n<', htmlString)
    removalList = [
    '<DL>',
    '<DT>',
    '</DT>',
    '</p>',
    '</A>',
    '</H3>',
    ]
    for tag in removalList:
        htmlString = htmlString.replace(tag,'')
    htmlString = htmlString.replace('</DL><p>','</DL>')
    htmlString = htmlString.replace('<p>\n','')
    
    htmlString = htmlString.replace('&amp;','&')
    htmlString = htmlString.replace('&gt;','>')
    htmlString = htmlString.replace('&lt;','<')
    htmlString = htmlString.replace('&quot;','"')
    htmlString = htmlString.replace('&#58;',':')
    return htmlString
def parseHTML(htmlString):
    #Takes: htmlString as str
    #Performs: parses htmlString for folders and links 
    #Returns: dictionary of folders and links
    bookmarks = {}
    htmlString = cleanHTML(htmlString)
    htmlLines = htmlString.split('\n')
    
    currentFolder = bookmarks
    folderHistory = []
    for i, line in enumerate(htmlLines):
        if '<H3 ' in line:
            #Add folder to history and enter it
            folderHistory.append(currentFolder)
            folderName = line.split('>',1)[-1]
            currentFolder[folderName] = {}
            currentFolder = currentFolder[folderName]
        elif '</DL>' in line:
            #Go back up a folder since we've hit the end
            if len(folderHistory) != 0:
                currentFolder = folderHistory.pop()
        elif '<A ' in line:
            bookmark = {}
            if 'HREF' in line:
                bookmark['link'] = line.split('HREF="',1)[-1].split('"',1)[0]
            else:
                bookmark['link'] = ''
            if 'ADD_DATE' in line:
                bookmark['ADD_DATE'] = line.split('ADD_DATE="',1)[-1].split('"',1)[0]
            else:
                bookmark['ADD_DATE'] = ''
            if 'LAST_MODIFIED' in line:
                bookmark['LAST_MODIFIED'] = line.split('LAST_MODIFIED="',1)[-1].split('"',1)[0]
            else:
                bookmark['LAST_MODIFIED'] = ''
            if 'SHORTCUTURL' in line:
                bookmark['SHORTCUTURL'] = line.split('SHORTCUTURL="',1)[-1].split('"',1)[0]
            else:
                bookmark['SHORTCUTURL'] = ''
            if '<DD>' in htmlLines[i+1]:
                bookmark['Description'] = htmlLines[i+1].replace('<DD>', '')
            else:
                bookmark['Description'] = ''
            bookmark['Title'] = line.split('>',1)[-1]
            currentFolder[bookmark['link']] = bookmark
    return bookmarks
