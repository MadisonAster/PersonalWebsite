import sys, os, re
import urllib.request as urllib
import traceback
import datetime, time
from pprint import pprint, pformat
import json
import shutil

from xml.etree import ElementTree
from bs4 import BeautifulSoup
import requests

import GatherFavorites

def main(user_id, key):
    HtmlDir = os.path.dirname(os.path.abspath(__file__)).rsplit('_py',1)[0].replace('\\','/')
    OutputDir = 'Favorites/Books/snapshot/'
    UpdateAll = GatherFavorites.GetSchedule()
    
    Entries = GatherFavorites.GetEntries(HtmlDir+OutputDir)
    #URLList = GetListData(user_id, 'read', key)
    Books = GetListData(user_id, 'favorites', key)
    GatherFavorites.TestData(Entries, Books.keys())
    
    for Book in Books.values():
        Entry = None
        if Book['EntryURL'] in Entries.keys():
            Entry = Entries[Book['EntryURL']]
            EntryPath = Entry['EntryPath']
            Book['EntryPath'] = Entry['EntryPath']
            Book['Entry_py'] = Entry['Entry_py']
            Book['Entry_json'] = Entry['Entry_json']
            Book['Entry_thumb'] = Entry['Entry_thumb']
            Book['EntryAdded'] = Entry['EntryAdded']
        else:
            EntryPath = OutputDir+'/'+GatherFavorites.SanitizeTitle(Book['title_without_series'])
            EntryPath = EntryPath.replace('\\','/').replace('//','/')
            Book['EntryPath'] = EntryPath
            Book['Entry_py'] = EntryPath+'/info.py'
            Book['Entry_json'] = EntryPath+'/entry.json'
            Book['Entry_thumb'] = EntryPath+'/thumb.jpg'
            Book['EntryAdded'] = datetime.datetime.strftime(datetime.datetime.now(), '%m-%d-%Y')
            
            if not os.path.exists(HtmlDir+EntryPath):
                os.makedirs(HtmlDir+EntryPath)
            GatherFavorites.DownloadThumbIfNecessary(Book['image_url'], HtmlDir+Book['Entry_thumb'])
        Entry = Book #Overwrite Entry reference
        Entries[Entry['EntryURL']] = Entry
    
    GatherFavorites.WriteEntries(HtmlDir, Entries)
    
    '''
    Book['id'] = book.find('id').text
    Book['isbn'] = book.find('isbn').text
    Book['isbn13'] = book.find('isbn13').text
    Book['uri'] = book.find('uri').text
    Book['title'] = book.find('title').text
    Book['tite_without_series'] = book.find('tite_without_series').text
    Book['img_url'] = book.find('img_url').text
    Book['small_image_url'] = book.find('small_image_url').text
    Book['large_image_url'] = book.find('large_image_url').text
    Book['link'] = book.find('link').text
    Book['num_pages'] = book.find('num_pages').text
    Book['format'] = book.find('format').text
    Book['edition_information'] = book.find('edition_information').text
    Book['publisher'] = book.find('publisher').text
    Book['publication_day'] = book.find('publication_day').text
    Book['publication_year'] = book.find('publication_year').text
    Book['publication_month'] = book.find('publication_month').text
    Book['description'] = book.find('description').text
    Book['authors'] = book.find('authors').text
    Book['published'] = book.find('published').text
    Book['work'] = book.find('work').text
    '''


def RemoveReviews(MyDict):
    delete_keys = ['text_reviews_count', 'ratings_count', 'average_rating']
    for key in delete_keys:
        if key in MyDict.keys():
            del MyDict[key]

def GetTextData(DataTree):
    Result = {}
    for child in DataTree:
        Result[child.tag] = child.text
    RemoveReviews(Result)
    return Result

def GetListData(user_id, shelf, key):
    page = '1'
    per_page = '200'
    
    response = requests.get('https://www.goodreads.com/review/list?v=2&id='+user_id+'&shelf='+shelf+'&page='+page+'&per_page='+per_page+'&key='+key)
    tree = ElementTree.fromstring(response.content)
    
    Books = {}
    for review in tree.find('reviews'):
        bookdata = review.find('book')
        Book = GetTextData(bookdata)
        Authors = []
        for authordata in bookdata.find('authors'):
            Author = GetTextData(authordata)
            Authors.append(Author)
        Book['authors'] = Authors
        Book['EntryURL'] = Book['link']
        Books[Book['EntryURL']] = Book
    return Books

if __name__ == '__main__':
    user_id = sys.argv[1]
    key = sys.argv[2]
    main(user_id, key)

