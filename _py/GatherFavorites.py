import sys, os, re
import urllib.request as urllib
import traceback
import datetime, time
from pprint import pprint, pformat
import json

from bs4 import BeautifulSoup
import requests

import GetURLs
import ffmpegScripts

def main():
    #scanURL(GetURLs.GetFavoriteTVURL_Old(),TVDir)
    #scanURL(GetURLs.GetFavoriteMoviesURL_Old(),MoviesDir)
    HtmlDir = os.path.dirname(os.path.abspath(__file__)).rsplit('_py',1)[0].replace('\\','/')
    
    MoviesDir = 'Favorites/Movies/snapshot/'
    TVDir = 'Favorites/TV/snapshot/'
    BooksDir = 'Favorites/Books/snapshot/'
    GamesDir = 'Favorites/Games/snapshot'
    BookmarksDir = 'Favorites/Bookmarks/snapshot'
    UpdateAll = GetSchedule()
    
    GetIMDB(GetURLs.GetFavoriteTVURL(), HtmlDir, TVDir, UpdateAll=UpdateAll)
    GetIMDB(GetURLs.GetFavoriteMoviesURL(), HtmlDir, MoviesDir, UpdateAll=UpdateAll)
    #GetRawg(GetURLs.GetFavoriteGamesURL(), HtmlDir, GamesDir, UpdateAll=UpdateAll)
    #GetFirefox(GetURLs.GetFavoriteBookmarksURL(), HtmlDir, BookmarksDir, UpdateAll=UpdateAll)
    pass

def GetSchedule():
    if int(datetime.datetime.strftime(datetime.datetime.now(), '%d')) == 1: #UpdateAll every 1st of the month
        UpdateAll = True
    else:
        UpdateAll = False
    return UpdateAll


def GetEntries(OutputDir, UsePy=False):
    Entries = {}
    ExistingEntries = os.listdir(OutputDir)
    for folder in ExistingEntries:
        EntryPath = OutputDir+'/'+folder
        EntryPath = EntryPath.replace('\\','/').replace('//','/')
        if not os.path.isdir(EntryPath):
            continue
        if UsePy:
            with open(EntryPath+'/info.py', 'rb') as file:
                Entry = eval(file.read())
        else:
            with open(EntryPath+'/entry.json', 'rb') as file:
                Entry = json.loads(file.read())
        Entries[Entry['EntryURL']] = Entry
    return Entries

def WriteEntries(HtmlDir, Entries):
    for Entry in Entries.values():
        with open(HtmlDir+Entry['Entry_json'], 'wb') as file:
            file.write(bytes(json.dumps(Entry), 'utf-8'))
        with open(HtmlDir+Entry['Entry_py'], 'wb') as file:
            file.write(bytes(pformat(Entry), 'utf-8'))

def GetIMDBListData(url):
    ReturnList = []
    jsonobj = GetIMDBItemData(url)
    for item in jsonobj['about']['itemListElement']:
        itemurl = 'https://www.imdb.com'+item['url'].rstrip('/')
        ReturnList.append(itemurl)
    return ReturnList
    
def GetIMDBItemData(url):
    source = requests.get(url).text
    soup = BeautifulSoup(source, 'lxml')
    jsonscript = soup.find('script', type="application/ld+json")
    jsontext = jsonscript.contents[0]
    jsonobj = json.loads(jsontext)
    return jsonobj

def TestData(Entries, URLList):
    for itemurl in URLList:
        if itemurl not in Entries.keys():
            print('No entry found for:', itemurl)
    for entry in Entries.values():
        if entry['EntryURL'] not in URLList:
            print('No list item found for:', entry['Title'])

def SanitizeTitle(Title):
    Result = ''
    for i, a in enumerate(Title):
        if a.isalpha() or a.isdigit():
            if i == 0:
                Result += a.upper()
            elif Result[-1] == '-':
                Result += a.upper()
            else:
                Result += a.lower()
        elif a in ['_', '-', ' ', '\t']:
            Result += '-'
    return Result

def DownloadThumbIfNecessary(ThumbURL, Entry_thumb):
    if not os.path.exists(Entry_thumb):
        jpg = urllib.urlopen(ThumbURL)
        with open(Entry_thumb, 'wb') as file:
            file.write(jpg.read())
        streamdict = ffmpegScripts.ffmpeg_getStream(Entry_thumb)
        width = int(streamdict['width'])
        height = int(streamdict['height'])
        if width != 150 or height != 225:
            ffmpegScripts.ResizeImage(Entry_thumb, 150, 225)

def GetIMDB(url, HtmlDir, OutputDir, UpdateAll=False):
    #print('GetIMDB!', url, HtmlDir, OutputDir)
    #match = soup.find('div', class_='footer')
    #for match in soup.find_all('div', class_='footer')
    
    Entries = GetEntries(HtmlDir+OutputDir)
    URLList = GetIMDBListData(url)
    TestData(Entries, URLList)
    
    for itemurl in URLList:
        Entry = None
        if itemurl in Entries.keys():
            Entry = Entries[itemurl]
            EntryPath = Entry['EntryPath']
            if 'review' in Entry.keys():
                del Entry['review']
        if itemurl not in Entries.keys() or UpdateAll:
            print('Downloading', itemurl)
            Item = GetIMDBItemData(itemurl)
            if 'review' in Item.keys():
                del Item['review']
            if Entry == None:
                EntryPath = OutputDir+'/'+SanitizeTitle(Item['name'])
                EntryPath = EntryPath.replace('\\','/').replace('//','/')
                Item['EntryURL'] = itemurl
                Item['EntryPath'] = EntryPath
                Item['Entry_py'] = EntryPath+'/info.py'
                Item['Entry_json'] = EntryPath+'/entry.json'
                Item['Entry_thumb'] = EntryPath+'/thumb.jpg'
                Item['EntryAdded'] = datetime.datetime.strftime(datetime.datetime.now(), '%m-%d-%Y')
                pprint(Item)
            else:
                Item['EntryURL'] = Entry['EntryURL'].replace('http://', 'https://').rstrip('/')
                Item['EntryPath'] = Entry['EntryPath']
                Item['Entry_py'] = Entry['Entry_py']
                Item['Entry_json'] = Entry['Entry_json']
                Item['Entry_thumb'] = Entry['Entry_thumb']
                Item['EntryAdded'] = Entry['EntryAdded']
            if not os.path.exists(HtmlDir+EntryPath):
                os.makedirs(HtmlDir+EntryPath)
            Entry = Item #Overwrite possibly existing Entry reference here to update data
        Entries[Entry['EntryURL']] = Entry
        DownloadThumbIfNecessary(Entry['image'], HtmlDir+Entry['Entry_thumb'])
            
    WriteEntries(HtmlDir, Entries)

def GetRawg(url, HtmlDir, OutputDir, UpdateAll=False):
    ExistingEntries = os.listdir(OutputDir)
    html = getAndSanitize(url)
    
    with open(OutputDir+'/index.html', 'w') as file:
        file.write(html)

def GetFirefox(url, HtmlDir, OutputDir, UpdateAll=False):
    ExistingEntries = os.listdir(OutputDir)
    html = getAndSanitize(url)
    
    with open(OutputDir+'/index.html', 'w') as file:
        file.write(html)

def getAndSanitize(url):
    domain = url.strip('http://')
    domain = domain.strip('https://')
    domain = 'http://'+domain.split('/',1)[0]+'/'
    
    response = urllib2.urlopen(url)
    html = response.read()

    expression = re.compile('<script.*?/script>', flags=re.DOTALL)
    html = re.sub(expression, '', html)

    expression = re.compile('<iframe.*?/iframe>', flags=re.DOTALL)
    html = re.sub(expression, '', html)
    
    html = html.replace('<a href="/', '<a href="'+domain)
    html = html.replace("<a href='/", "<a href='"+domain)
    
    return html
    

if __name__ == '__main__':
    main()