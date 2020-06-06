import os, sys
import sqlite3
from pprint import pprint

def main(username):
    bookmarks_path = "C:/Users/"+username+"/AppData/Roaming/Mozilla/Firefox/Profiles/"
    profiles = [i for i in os.listdir(bookmarks_path) if i.endswith('.default-release')]
    sqlite_path = bookmarks_path+ profiles[0]+'/places.sqlite'
    
    if os.path.exists(sqlite_path):
        firefox_connection = sqlite3.connect(sqlite_path)
    cursor = firefox_connection.cursor()
    Bookmarks, StudiesFolder = get_bookmarks(cursor, TargetFolder='Studies')
    cursor.close()
    
    pprint(StudiesFolder)

def execute_query(cursor, query):
    try:
        cursor.execute(query)
    except Exception as error:
        print(str(error) + "\n " + query)

def get_bookmarks(cursor, TargetFolder='Studies'):
    #bookmarks_query = """select url, moz_places.title, rev_host, frecency,
    #last_visit_date from moz_places  join  \
    #moz_bookmarks on moz_bookmarks.fk=moz_places.id where visit_count>0
    #and moz_places.url  like 'http%'
    #order by dateAdded desc;"""
    #bookmarks_query = "select url, moz_bookmarks.title, from moz_bookmarks;"
    #bookmarks_query = """
    #SELECT moz_places.id, moz_places.url, moz_places.title, moz_bookmarks.parent,
    #moz_bookmarks.dateAdded, moz_bookmarks.folder_type
    #FROM moz_places
    #LEFT OUTER JOIN moz_bookmarks
    #ON moz_places.id = moz_bookmarks.fk
    #"""
    #bookmarks_query="""
    #SELECT moz_bookmarks.title, moz_places.url 
    #FROM moz_bookmarks 
    #LEFT JOIN moz_places 
    #WHERE moz_bookmarks.fk = moz_places.id 
    #AND moz_bookmarks.title != 'null';
    #"""
    #bookmarks_query="""
    #SELECT moz_bookmarks.title, moz_places.url, moz_bookmarks_roots.root_name
    #FROM moz_bookmarks AS b
    #LEFT JOIN moz_places AS p ON b.fk=p.id
    #LEFT JOIN moz_bookmarks_roots AS r ON b.id=r.folder_id
    #WHERE b.title != 'null';
    #"""
    
    bookmarks_query="""
    SELECT moz_bookmarks.id, moz_bookmarks.title, moz_bookmarks.parent
    FROM moz_bookmarks
    WHERE moz_bookmarks.type = 2;
    """
    
    Bookmarks = {
    '0': {
        'title':'',
        'parent':'',
        'folders':[],
        'links':[],
        }
    }
    AllFolders = {
    '0' : Bookmarks['0']
    }
    
    execute_query(cursor, bookmarks_query)
    for row in cursor:
        id = row[0]
        title = row[1]
        parent = row[2]
        
        AllFolders[str(id)] = {
            'title':title,
            'parent':parent,
            'folders':[],
            'links':[],
        }
        AllFolders[str(parent)]['folders'].append(AllFolders[str(id)])
        
        if title == TargetFolder:
            SelectedFolder = AllFolders[str(id)]
    
    bookmarks_query="""
    SELECT moz_bookmarks.title, moz_bookmarks.parent, moz_places.url
    FROM moz_bookmarks 
    LEFT JOIN moz_places ON moz_bookmarks.fk=moz_places.id
    WHERE moz_bookmarks.type = 1;
    """
    execute_query(cursor, bookmarks_query)
    for row in cursor:
        title = row[0]
        parent = row[1]
        url = row[2]
        
        bookmark = {
            'title':title,
            'url':url,
        }
        AllFolders[str(parent)]['links'].append(bookmark)
    
    return Bookmarks, SelectedFolder

if __name__ == '__main__':
    username = sys.argv[1]
    main(username)