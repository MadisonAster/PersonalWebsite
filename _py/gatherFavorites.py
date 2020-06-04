import sys, os, re
import urllib.request as urllib
import traceback
import datetime, time
from pprint import pprint, pformat
import json

from bs4 import BeautifulSoup
import requests

import GetURLs

def main():
    #scanURL(GetURLs.GetFavoriteTVURL_Old(),TVDir)
    #scanURL(GetURLs.GetFavoriteMoviesURL_Old(),MoviesDir)
    htmlDir = os.path.dirname(os.path.abspath(__file__)).rsplit('_py',1)[0]
    
    MoviesDir = htmlDir+'Favorites/Movies/snapshot/'
    TVDir = htmlDir+'Favorites/TV/snapshot/'
    BooksDir = htmlDir+'Favorites/Books/snapshot/'
    GamesDir = htmlDir+'Favorites/Games/snapshot'
    BookmarksDir = htmlDir+'Favorites/Bookmarks/snapshot'
    
    GetIMDB(GetURLs.GetFavoriteTVURL(), TVDir)
    GetIMDB(GetURLs.GetFavoriteMoviesURL(), MoviesDir)
    #GetGoodReads(GetURLs.GetFavoriteBooksURL(), BooksDir)
    #GetRawg(GetURLs.GetFavoriteGamesURL(), GamesDir)
    #GetFirefox(GetURLs.GetFavoriteBookmarksURL(), BookmarksDir)
    
    pass

def GetLinks(html):
    pass #Do something with beautiful soup here

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

def WriteEntries(Entries):
    for Entry in Entries.values():
        with open(Entry['Entry_json'], 'wb') as file:
            print('Writing', Entry['Entry_json'])
            file.write(bytes(json.dumps(Entry), 'utf-8'))
        with open(Entry['Entry_py'], 'wb') as file:
            print('Writing', Entry['Entry_py'])
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

def GetIMDB(url, OutputDir, UpdateAll=False):
    print('GetIMDB!', url, OutputDir)
    #match = soup.find('div', class_='footer')
    #for match in soup.find_all('div', class_='footer')
    
    Entries = GetEntries(OutputDir)
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
            else:
                Item['EntryURL'] = Entry['EntryURL'].replace('http://', 'https://').rstrip('/')
                Item['EntryPath'] = Entry['EntryPath']
                Item['Entry_py'] = Entry['Entry_py']
                Item['Entry_json'] = Entry['Entry_json']
                Item['Entry_thumb'] = Entry['Entry_thumb']
                Item['EntryAdded'] = Entry['EntryAdded']
            if not os.path.exists(EntryPath):
                os.makedirs(EntryPath)
            Entry = Item #Overwrite possibly existing Entry reference here to update data
        Entries[Entry['EntryURL']] = Entry
        if not os.path.exists(Entry['Entry_thumb']):
            jpg = urllib.urlopen(Entry['image'])
            with open(Entry['Entry_thumb'], 'wb') as file:
                file.write(jpg.read())
    WriteEntries(Entries)

def GetGoodReads(url, OutputDir):
    ExistingEntries = os.listdir(OutputDir)
    html = getAndSanitize(url)
    
    with open(OutputDir+'/index.html', 'w') as file:
        file.write(html)

def GetRawg(url, OutputDir):
    ExistingEntries = os.listdir(OutputDir)
    html = getAndSanitize(url)
    
    with open(OutputDir+'/index.html', 'w') as file:
        file.write(html)

def GetFirefox(url, OutputDir):
    ExistingEntries = os.listdir(OutputDir)
    html = getAndSanitize(url)
    
    with open(OutputDir+'/index.html', 'w') as file:
        file.write(html)

def scanURL(url, outputDir):
    ExistingEntries = os.listdir(outputDir)
    favsList = []
    favsListHTML = getAndSanitize(url)
    itemList = favsListHTML.split('<div class="index_item">')[1:]
    for item in itemList:
        itemDict = {}
        itemDict['PrimeWire'] = item.split('<a href="',1)[1].split('"',1)[0]
        itemDict['Title'] = itemDict['PrimeWire'].rsplit('/',1)[1].split('-',2)[2]
        if itemDict['Title'] not in ExistingEntries:
            itemDict['ThumbURL'] = 'http:'+item.split('<img src="',1)[1].split('"',1)[0]
            itemDict['Added'] = item.split('fav_date',1)[1].split(': ',1)[1].split('<',1)[0]
            itemDict['Added'] = time.strptime(itemDict['Added'], '%b %d, %Y')
            itemDict['Added'] = str(itemDict['Added'].tm_year)+'-'+str(itemDict['Added'].tm_mon).zfill(2)+'-'+str(itemDict['Added'].tm_mday).zfill(2)
            
            itemHTML = getAndSanitize(itemDict['PrimeWire'])
            itemDict['Description'] = itemHTML.split('movie_info',1)[1].split('<p',1)[1].split('>',1)[1].split('<',)[0]
            try:
                itemDict['Released'] = itemHTML.split('Released:',1)[1].split('<td',1)[1].split('>',1)[1].split('<',1)[0]
                itemDict['Released'] = time.strptime(itemDict['Released'], '%B %d, %Y')
                itemDict['Released'] = str(itemDict['Released'].tm_year)+'-'+str(itemDict['Released'].tm_mon).zfill(2)+'-'+str(itemDict['Released'].tm_mday).zfill(2)
            except:
                itemDict['Released'] = 'NA'
            try:
                itemDict['Runtime'] = itemHTML.split('Runtime:',1)[1].split('<td',1)[1].split('>',1)[1].split('<',1)[0]
            except:
                itemDict['Runtime'] = 'NA'
            
            try:
                itemDict['Genres'] = itemHTML.split('Genres:',1)[1].split('</tr',1)[0].split('/?genre=')[1:]
                for i, a in enumerate(itemDict['Genres']):
                    itemDict['Genres'][i] = a.split('"',1)[0]
            except:
                itemDict['Genres'] = []
            
            try:
                itemDict['Countries'] = itemHTML.split('Countries:',1)[1].split('</tr',1)[0].split('/?country=')[1:]
                for i, a in enumerate(itemDict['Countries']):
                    itemDict['Countries'][i] = a.split('"',1)[0]
            except:
                itemDict['Countries'] = []
                
            try:
                itemDict['Director'] = itemHTML.split('Director:',1)[1].split('</tr',1)[0].split('/?&director=')[1:]
                for i, a in enumerate(itemDict['Director']):
                    itemDict['Director'][i] = a.split('"',1)[0]
            except:
                itemDict['Director'] = []
            
            try:
                itemDict['Actors'] = itemHTML.split('Actors:',1)[1].split('</tr',1)[0].split('/?actor_name=')[1:]
                for i, a in enumerate(itemDict['Actors']):
                    itemDict['Actors'][i] = a.split('"',1)[0]
            except:
                itemDict['Actors'] = []
                
            itemDict['Ratings'] = {}
            itemDict['Ratings']['PrimeWire'] = itemHTML.split('Currently ',1)[1].split('<',1)[0]
            itemDict['Ratings']['Votes'] = itemHTML.split(' votes)',1)[0].rsplit('(',1)[1]
            itemDict['Ratings']['IMDB'] = itemHTML.split('IMDB: ',1)[1].split('</',1)[0].rsplit('>',1)[1]
            itemDict['Ratings']['Metascore'] = itemHTML.split('Metascore: ',1)[1].split('</',1)[0].rsplit('>',1)[1]
            itemDict['Ratings']['RT'] = itemHTML.split('RT: ',1)[1].split('</',1)[0].rsplit('>',1)[1]
            
            if 'mlink_imdb' in itemHTML:
                itemDict['IMDB'] = itemHTML.split('mlink_imdb',1)[1].split('href="',1)[1].split('"',1)[0]
            else:
                itemDict['IMDB'] = 'NA'
            
            favsList.append(itemDict)
            pprint(itemDict)
            
            favDir = outputDir+'/'+itemDict['Title']
            os.mkdir(favDir)
            infoTextPY = pformat(itemDict)
            
            infoFile = open(favDir+'/info.py', 'w')
            infoFile.write(infoTextPY)
            infoFile.close()
            
            infoTextPHP = '<?php\n$infoArray = '+infoTextPY+';\n?>'
            infoTextPHP = infoTextPHP.replace("': ", "' => ")
            infoTextPHP = infoTextPHP.replace("{", "array(")
            infoTextPHP = infoTextPHP.replace("[", "array(")
            infoTextPHP = infoTextPHP.replace("]", ")")
            infoTextPHP = infoTextPHP.replace("}", ")")
            
            infoFile = open(favDir+'/info.php', 'w')
            infoFile.write(infoTextPHP)
            infoFile.close()
        
            jpgFile = urllib2.urlopen(itemDict['ThumbURL'])
            thumbFile = open(favDir+'/thumb.jpg', 'wb')
            thumbFile.write(jpgFile.read())
            thumbFile.close()
        
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