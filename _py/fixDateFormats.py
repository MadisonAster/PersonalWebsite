import os
import datetime

def main(LinksPath):
    for (path, dirs, files) in os.walk(LinksPath):
        if 'info.py' in files:
            infoFilePY = open(path+'/info.py', 'r')
            infoTextPY = infoFilePY.read()
            infoFilePY.close()
            
            AddedDate = infoTextPY.split("'Added': '", 1)[1].split("',", 1)[0]
            AddedDateFixed = str(datetime.datetime.strptime(AddedDate, '%b %d, %Y').date())
            infoTextPY = infoTextPY.replace(AddedDate, AddedDateFixed)
            
            try:
                ReleasedDate = infoTextPY.split("'Released': '", 1)[1].split("',", 1)[0]
                ReleasedDateFixed = str(datetime.datetime.strptime(ReleasedDate, '%B %d, %Y').date())
                infoTextPY = infoTextPY.replace(ReleasedDate, ReleasedDateFixed)
            except:
                pass
            
            infoFilePY = open(path+'/info.py', 'w')
            infoFilePY.seek(0)
            infoFilePY.truncate()
            infoFilePY.write(infoTextPY)
            print(path+'/info.py')
            infoFilePY.close()
            
        if 'info.php' in files:
            infoFilePHP = open(path+'/info.php', 'r')
            infoTextPHP = infoFilePHP.read()
            infoFilePHP.close()
            
            AddedDate = infoTextPHP.split("'Added' => '", 1)[1].split("',", 1)[0]
            AddedDateFixed = str(datetime.datetime.strptime(AddedDate, '%b %d, %Y').date())
            infoTextPHP = infoTextPHP.replace(AddedDate, AddedDateFixed)
            
            try:
                ReleasedDate = infoTextPHP.split("'Released' => '", 1)[1].split("',", 1)[0]
                ReleasedDateFixed = str(datetime.datetime.strptime(ReleasedDate, '%B %d, %Y').date())
                infoTextPHP = infoTextPHP.replace(ReleasedDate, ReleasedDateFixed)
            except:
                pass
            
            
            infoFilePHP = open(path+'/info.php', 'w')
            infoFilePHP.seek(0)
            infoFilePHP.truncate()
            infoFilePHP.write(infoTextPHP)
            print(path+'/info.php')
            infoFilePHP.close()
        
if __name__ == '__main__':
    main('C:/Portfolio/Website/_Assets/WatchList/Movies')
    main('C:/Portfolio/Website/_Assets/WatchList/TV')
    