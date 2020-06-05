import sys, os, re
import urllib.request as urllib
import traceback
import datetime, time
from pprint import pprint, pformat
import json
import shutil

#from xml.etree import ElementTree
#from bs4 import BeautifulSoup
import requests

import rawgpy

import GatherFavorites

def main(user_id, key):
    HtmlDir = os.path.dirname(os.path.abspath(__file__)).rsplit('_py',1)[0].replace('\\','/')
    OutputDir = 'Favorites/Games/snapshot/'
    UpdateAll = GatherFavorites.GetSchedule()
    
    Entries = GatherFavorites.GetEntries(HtmlDir+OutputDir)
    #Games = GetListData(user_id, 'read', key)
    Games = GetListData(user_id, 'favorites', key)
    GatherFavorites.TestData(Entries, Games.keys())
    
    for Game in Games.values():
        Entry = None
        if Game['EntryURL'] in Entries.keys():
            Entry = Entries[Game['EntryURL']]
            EntryPath = Entry['EntryPath']
            Game['EntryPath'] = Entry['EntryPath']
            Game['Entry_py'] = Entry['Entry_py']
            Game['Entry_json'] = Entry['Entry_json']
            Game['Entry_thumb'] = Entry['Entry_thumb']
            Game['EntryAdded'] = Entry['EntryAdded']
        else:
            EntryPath = OutputDir+'/'+GatherFavorites.SanitizeTitle(Game['title_without_series'])
            EntryPath = EntryPath.replace('\\','/').replace('//','/')
            Game['EntryPath'] = EntryPath
            Game['Entry_py'] = EntryPath+'/info.py'
            Game['Entry_json'] = EntryPath+'/entry.json'
            Game['Entry_thumb'] = EntryPath+'/thumb.jpg'
            Game['EntryAdded'] = datetime.datetime.strftime(datetime.datetime.now(), '%m-%d-%Y')
            
            if not os.path.exists(HtmlDir+EntryPath):
                os.makedirs(HtmlDir+EntryPath)
            #GatherFavorites.DownloadThumbIfNecessary(GetImageURL(Game['EntryURL']), HtmlDir+Game['Entry_thumb'])
        Entry = Game #Overwrite Entry reference
        Entries[Entry['EntryURL']] = Entry
    
    #GatherFavorites.WriteEntries(HtmlDir, Entries)

def GetImageURL(BookURL):
    source = requests.get(BookURL).text
    soup = BeautifulSoup(source, 'lxml')
    img = soup.find('img', id="coverImage")
    print(img['src'])
    return img['src']

def RemoveReviews(MyDict):
    delete_keys = ['text_reviews_count', 'ratings_count', 'average_rating']
    for key in delete_keys:
        if key in MyDict.keys():
            del MyDict[key]


def GetListData(user_id, shelf, key):
    #page = '1'
    #per_page = '200'
    rawg = rawgpy.RAWG("User-Agent, www.MadisonAster.com/Favorites")
    user = rawg.get_user(user_id)
    user.populate()
    
    #response = requests.get('https://www.goodreads.com/review/list?v=2&id='+user_id+'&shelf='+shelf+'&page='+page+'&per_page='+per_page+'&key='+key)
    #tree = ElementTree.fromstring(response.content)
    
    Games = {}
    for gamedata in user.games:
        #print(gamedata)
        #pprint(dir(gamedata))
        #break
        gamedata.populate()
        Game = {
            'name' : gamedata.name,
            'genres' : gamedata.genres,
            'platforms' : gamedata.platforms,
            'developers' : gamedata.developers,
            'publishers' : gamedata.publishers,
            'added' : gamedata.added,
            'slug' : gamedata.slug,
            #'share_image' : gamedata.share_image,
            'background_image' : gamedata.background_image,
        }
        print(Game['name'])
        print('    ', Game['genres'])
        print('    ', Game['platforms'])
        print('    ', Game['developers'])
        print('    ', Game['publishers'])
        print('    ', Game['added'])
        print('    ', Game['slug'])
        print('    ', Game['background_image'])
        
        if hasattr(gamedata, 'released'):
            Game['released'] = gamedata.released
            print('    ', Game['released'])
        if hasattr(gamedata, 'bio'):
            Game['bio'] = gamedata.bio
            print('    ', Game['bio'])
        
        if hasattr(gamedata, 'share_image'):
            Game['share_image'] = gamedata.share_image
            print('    ', Game['share_image'])
        continue
        Authors = []
        for authordata in gamedata.find('authors'):
            Author = GetTextData(authordata)
            Authors.append(Author)
        Game['authors'] = Authors
        Game['EntryURL'] = Game['link']
        Games[Game['EntryURL']] = Game
    return Games
    
    
if __name__ == '__main__':
    user_id = sys.argv[1]
    #key = sys.argv[2]
    key = 'none'
    print('user_id', user_id)
    main(user_id, key)

