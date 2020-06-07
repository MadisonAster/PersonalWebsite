import sys, os, re
import urllib.request as urllib
import traceback
import datetime, time
from pprint import pprint, pformat
import json

from bs4 import BeautifulSoup
import requests

import GatherFavorites

def main(url, OutputDir):
    HtmlDir = os.path.dirname(os.path.abspath(__file__)).rsplit('_py',1)[0].replace('\\','/')
    UpdateAll = GatherFavorites.GetSchedule()
    GetIMDB(url, HtmlDir, OutputDir, UpdateAll=UpdateAll)

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

def GetIMDB(url, HtmlDir, OutputDir, UpdateAll=False):
    #print('GetIMDB!', url, HtmlDir, OutputDir)
    #match = soup.find('div', class_='footer')
    #for match in soup.find_all('div', class_='footer')
    
    Entries = GatherFavorites.GetEntries(HtmlDir+OutputDir)
    URLList = GetIMDBListData(url)
    GatherFavorites.TestData(Entries, URLList)
    
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
                EntryPath = OutputDir+'/'+GatherFavorites.SanitizeTitle(Item['name'])
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
        if 'image' in Entry.keys():
            GatherFavorites.DownloadThumbIfNecessary(Entry['image'], HtmlDir+Entry['Entry_thumb'])
            
    GatherFavorites.WriteEntries(HtmlDir, Entries)

if __name__ == '__main__':
    url = sys.argv[0]
    OutputDir = sys.argv[1]
    main(url, OutputDir)