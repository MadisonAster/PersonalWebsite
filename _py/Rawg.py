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
    global _RAWG
    _RAWG = rawgpy.RAWG("User-Agent, www.MadisonAster.com/Favorites")
    
    HtmlDir = os.path.dirname(os.path.abspath(__file__)).rsplit('_py',1)[0].replace('\\','/')
    OutputDir = 'Favorites/Games/snapshot/'
    UpdateAll = GatherFavorites.GetSchedule()
    
    Entries = GatherFavorites.GetEntries(HtmlDir+OutputDir)
    Games = GetListData(user_id, 'favorites', key)
    GatherFavorites.TestData(Entries, Games.keys())
    
    for Game in Games.values():
        Entry = None
        if Game['EntryURL'] not in Entries.keys() or UpdateAll:
            PopulateGame(Game)
            EntryPath = OutputDir+'/'+GatherFavorites.SanitizeTitle(Game['slug'])
            EntryPath = EntryPath.replace('\\','/').replace('//','/')
            Game['EntryPath'] = EntryPath
            Game['Entry_py'] = EntryPath+'/info.py'
            Game['Entry_json'] = EntryPath+'/entry.json'
            Game['Entry_thumb'] = EntryPath+'/thumb.jpg'
            Game['EntryAdded'] = datetime.datetime.strftime(datetime.datetime.now(), '%m-%d-%Y')
            
            if not os.path.exists(HtmlDir+EntryPath):
                os.makedirs(HtmlDir+EntryPath)
            GatherFavorites.DownloadThumbIfNecessary(Game['background_image'], HtmlDir+Game['Entry_thumb'], crop=True)
        else:
            Entry = Entries[Game['EntryURL']]
            for key in Entry.keys():
                Game[key] = Entry[key]
        Entry = Game #Overwrite Entry reference
        Entries[Entry['EntryURL']] = Entry
        break
    GatherFavorites.WriteEntries(HtmlDir, Entries)

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

def PopulateGame(Game):
    global _RAWG
    print('PopulateGame!', Game)
    gamedata = _RAWG.get_game(Game['slug'])
    #gamedata.populate()
    
    Game['name'] = gamedata.name
    Game['genres'] = gamedata.genres
    Game['added'] = gamedata.added
    Game['slug']  = gamedata.slug
    Game['background_image'] = gamedata.background_image
    platforms = []
    for platform in gamedata.platforms:
        platforms.append(platform.name)
    Game['platforms'] = platforms
    developers = []
    for developer in gamedata.developers:
        developers.append(developer.name)
    Game['developers'] = developers
    #Game['developers'] = gamedata.developers
    publishers = []
    for publisher in gamedata.publishers:
        publishers.append(publisher.name)
    Game['publishers'] = publishers
    #Game['publishers'] = gamedata.publishers
    
    if hasattr(gamedata, 'released'):
        Game['released'] = gamedata.released
    if hasattr(gamedata, 'bio'):
        Game['bio'] = gamedata.bio
    if hasattr(gamedata, 'share_image'):
        Game['share_image'] = gamedata.share_image

def GetListData(user_id, shelf, key):
    global _RAWG
    user = _RAWG.get_user(user_id)
    user.populate()
    
    Games = {}
    for gamedata in user.games:
        Game = {
            'name' : gamedata.name,
            'slug' : gamedata.slug,
        }
        Game['EntryURL'] = 'https://rawg.io/games/'+Game['slug']
        
        Games[Game['EntryURL']] = Game
    return Games

if __name__ == '__main__':
    user_id = sys.argv[1]
    #key = sys.argv[2]
    key = 'none'
    print('user_id', user_id)
    main(user_id, key)

