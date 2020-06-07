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

def DownloadThumbIfNecessary(ThumbURL, Entry_thumb, crop=False):
    if not os.path.exists(Entry_thumb):
        jpg = urllib.urlopen(ThumbURL)
        with open(Entry_thumb, 'wb') as file:
            file.write(jpg.read())
        streamdict = ffmpegScripts.ffmpeg_getStream(Entry_thumb)
        width = int(streamdict['width'])
        height = int(streamdict['height'])
        if width != 150 or height != 225:
            ffmpegScripts.ResizeImage(Entry_thumb, 150, 225, crop=crop)
