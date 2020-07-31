import os, sys
import csv
from pprint import pprint

def main():
    wd = os.path.dirname(os.path.abspath(__file__))
    WordListPath = wd+'/WordList.csv'
    print(WordListPath)
    CurrentList = []
    with open(WordListPath, 'r') as file:
        csvreader = csv.reader(file, delimiter=',')
        for value in csvreader:
            for item in value:
                if item not in ['', '\n', '\r', ' ', '\t']:
                    CurrentList.append(item)

    ScanTextPath = wd+'/WordScan.txt'
    NewList = []
    with open(ScanTextPath, 'r') as file:
        filetext = file.read();
        for word in filetext.split(' '):
            santizedword = ''
            for letter in word:
                if letter.isalpha():
                    santizedword += letter
            if santizedword not in ['', '\n', '\r', ' ', '\t']:
                NewList.append(santizedword)

    CombinedList = sorted(list(set(CurrentList + NewList)))
    newcount = len(CombinedList) - len(CurrentList)
    print(newcount, 'new words!')
    with open(WordListPath, 'w') as file:
        for item in CombinedList:
            file.write(item+',\n')
    
if __name__ == '__main__':
    main()
