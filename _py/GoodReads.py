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

def example():
    author_id = '1439'

    key = '***' #replace it with your developer key

    response = requests.get('https://www.goodreads.com/author/show.xml?'+'key='+key+'&id='+author_id)

    tree = ElementTree.fromstring(response.content)
    
    #print(response.content)
    #print(tree)

    print('Retrieving Author Info...\n')
    for leaves in tree[1]:
        print(leaves.tag +' : '+str(leaves.text))

    #print('Author Name: ' + tree[1][1].text)

    if(raw_input('Would you like to download the author image? y/n')=='y'):
        
        print('Downloading Author Image...\n')
        img = requests.get(tree[1][5].text, stream=True)
        with open(tree[1][0].text+'.jpg', 'wb') as out_file:
            shutil.copyfileobj(img.raw, out_file)
        del img
        print(tree[1][0].text+'.jpg'+' Image Downloaded Successfully')
    else:
        print('Thank you')

def main(user_id, key):
    print('this is your user_id!', user_id)
    print('this is your key!', key)
    
    HtmlDir = os.path.dirname(os.path.abspath(__file__)).rsplit('_py',1)[0].replace('\\','/')
    OutputDir = 'Favorites/Books/snapshot/'
    UpdateAll = GatherFavorites.GetSchedule()
    
    Entries = GatherFavorites.GetEntries(HtmlDir+OutputDir)
    URLList = GetListData(user_id, 'read', key)
    #URLList = GetListData(user_id, 'favorite', key)
    GatherFavorites.TestData(Entries, URLList)


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
    URLList = []
    page = '1'
    per_page = '200'
    response = requests.get('https://www.goodreads.com/review/list?v=2&id='+user_id+'&shelf='+shelf+'&page='+page+'&per_page='+per_page+'&key='+key)
    #pprint(response.text.split('\n'))
    tree = ElementTree.fromstring(response.content)
    reviews = tree.find('reviews')
    
    Books = []
    for review in reviews:
        print(review.tag, review.attrib, review.text)
        bookdata = review.find('book')
        Book = GetTextData(bookdata)
        Authors = []
        for authordata in bookdata.find('authors'):
            Author = GetTextData(authordata)
            Authors.append(Author)
        Book['authors'] = Authors
        Books.append(Book)
    pprint(Books)
    
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
    
    return []

if __name__ == '__main__':
    user_id = sys.argv[1]
    key = sys.argv[2]
    main(user_id, key)

