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

import gatherFavorites



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
    if int(datetime.datetime.strftime(datetime.datetime.now(), '%d')) == 1: #UpdateAll every 1st of the month
        UpdateAll = True
    else:
        UpdateAll = False
    
    Entries = gatherFavorites.GetEntries(HtmlDir+OutputDir)
    URLList = GetListData(user_id, key)
    gatherFavorites.TestData(Entries, URLList)
    
def GetListData(user_id, key):
    URLList = []
    
    response = requests.get('https://www.goodreads.com/shelf/list.xml?'+'key='+key+'&user_id='+user_id)
    print(response)
    
    return []

if __name__ == '__main__':
    user_id = sys.argv[1]
    key = sys.argv[2]
    main(user_id, key)

