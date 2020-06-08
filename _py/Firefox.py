import os, sys
import datetime, time
import sqlite3
from pprint import pprint

import GatherFavorites


def main(username):
    ############Paths################
    HtmlDir = os.path.dirname(os.path.abspath(__file__)).rsplit('_py',1)[0].replace('\\','/')
    OutputDir = 'Favorites/Bookmarks/snapshot/'
    UpdateAll = GatherFavorites.GetSchedule()
    
    bookmarks_path = "C:/Users/"+username+"/AppData/Roaming/Mozilla/Firefox/Profiles/"
    profiles = [i for i in os.listdir(bookmarks_path) if i.endswith('.default-release')]
    sqlite_path = bookmarks_path+ profiles[0]+'/places.sqlite'
    #################################
    
    ##########Get Data Tree##########
    if os.path.exists(sqlite_path):
        firefox_connection = sqlite3.connect(sqlite_path)
    cursor = firefox_connection.cursor()
    
    Bookmarks, StudiesFolder = GetFolderTree(cursor, TargetFolder='Studies')
    Bookmarks = GetBookmarks(cursor, Bookmarks)
    Bookmarks = GetKeywords(cursor, Bookmarks)
    #pprint(StudiesFolder)
    
    cursor.close()
    #################################
    
    ######Populate standard keys#####
    StudiesFolder['EntryURL'] = sqlite_path
    StudiesFolder['EntryPath'] = OutputDir
    StudiesFolder['Entry_py'] = OutputDir+'info.py'
    StudiesFolder['Entry_json'] = OutputDir+'entry.json'
    StudiesFolder['Entry_thumb'] = OutputDir+'thumb.jpg'
    StudiesFolder['EntryAdded'] = datetime.datetime.strftime(datetime.datetime.now(), '%m-%d-%Y')
    #################################
    
    ##########Write Data#############
    #pprint(StudiesFolder)
    Entries = {'StudiesFolder' : StudiesFolder}
    GatherFavorites.WriteEntries(HtmlDir, Entries)
    #################################
    
    
def ExecuteQuery(cursor, query):
    try:
        cursor.execute(query)
    except Exception as error:
        print(str(error) + "\n " + query)


def GetFolderTree(cursor, TargetFolder=None):
    #Takes:
    #Performs: Creates a dictionary tree called Bookmarks that contains only folders
    #Returns: A reference to the entire tree, as well as a reference to the tree from the specified folder down
    
    SQLliteQuery="""
    SELECT moz_bookmarks.id, moz_bookmarks.parent, moz_bookmarks.title, moz_bookmarks.position
    FROM moz_bookmarks
    WHERE moz_bookmarks.type = 2;
    """
    
    Bookmarks = {
        '0': {
            'id':'0',
            'parent':'',
            '_title':'',
            'position':'0',
            'folders':[],
            'links':[],
        },
        'AllFolders' : {},
        'AllLinks' : {},
    }
    Bookmarks['AllFolders']['0'] = Bookmarks['0']
    
    ExecuteQuery(cursor, SQLliteQuery)
    for row in cursor:
        id = row[0]
        parent = row[1]
        title = row[2]
        position = row[3]
        
        Bookmarks['AllFolders'][str(id)] = {
            'id':str(id),
            'parent':str(parent),
            '_title':str(title),
            'position':str(position),
            'folders':[],
            'links':[],
        }
        if TargetFolder:
            if title == TargetFolder:
                SelectedFolder = Bookmarks['AllFolders'][str(id)]
    for folderkey in Bookmarks['AllFolders'].keys():
        if folderkey == '0':
            continue
        else:
            folder = Bookmarks['AllFolders'][folderkey]
        Bookmarks['AllFolders'][folder['parent']]['folders'].append(folder)
    return Bookmarks, SelectedFolder

def GetBookmarks(cursor, Bookmarks):
    #Takes: cursor as open sqlite cursor, Bookmarks as Bookmarks dictionary tree constructed by get_FolderTree
    #Performs: Decorates Bookmars dictionary tree with links
    #Returns: Bookmarks
    
    SQLliteQuery="""
    SELECT moz_bookmarks.id,            moz_bookmarks.type,         moz_bookmarks.fk,
           moz_bookmarks.parent,        moz_bookmarks.position,     moz_bookmarks.title,
           moz_bookmarks.keyword_id,    moz_bookmarks.folder_type,  moz_bookmarks.dateAdded,
           moz_bookmarks.lastModified,  moz_bookmarks.guid, 
           moz_places.id,               moz_places.url,             moz_places.title,           moz_places.rev_host, 
           moz_places.visit_count,      moz_places.hidden,          moz_places.typed,           moz_places.frecency,
           moz_places.last_visit_date,  moz_places.guid,            moz_places.foreign_count,   moz_places.url_hash,
           moz_places.description,      moz_places.preview_image_url,                           moz_places.origin_id
    FROM moz_bookmarks 
    LEFT JOIN moz_places ON moz_bookmarks.fk=moz_places.id
    WHERE moz_bookmarks.type = 1;
    """
    keys = [
            'id',                       'type',                     'fk',
            'parent',                   'position',                 '_title',
            'keyword_id',               'folder_type',              'dateAdded',
            'lastModified',             'guid',                     
            'place_id',                 'url',                      'place_title',              'rev_host',
            'visit_count',              'hidden',                   'typed',                    'frecency',
            'last_visit_date',          'place_guid',               'foreign_count',            'url_hash',
            'description',              'preview_image_url',                                    'origin_id',
    ]
    
    ExecuteQuery(cursor, SQLliteQuery)
    for row in cursor:
        bookmark = {}
        for key, item in zip(keys, row):
            bookmark[key] = str((item))
        ParentFolder = Bookmarks['AllFolders'][bookmark['parent']]
        ParentFolder['links'].append(bookmark)
        Bookmarks['AllLinks'][bookmark['place_id']] = bookmark
    return Bookmarks

def GetKeywords(cursor, Bookmarks):
    SQLliteQuery="""
    SELECT moz_keywords.id, moz_keywords.keyword, moz_keywords.place_id, moz_keywords.post_data 
    FROM moz_keywords;
    """
    keys = ['keyword_id', 'keyword', 'place_id', 'post_data']
    ExecuteQuery(cursor, SQLliteQuery)
    for row in cursor:
        place_id = row[2]
        bookmark = Bookmarks['AllLinks'][str(place_id)]
        for key, item in zip(keys, row):
            bookmark[key] = str(item)
    return Bookmarks

if __name__ == '__main__':
    username = sys.argv[1]
    main(username)