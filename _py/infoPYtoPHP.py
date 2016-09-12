import os

def main():
    LinksPath = 'C:/Portfolio/Website/_Assets/WatchList/TV'
    for (path, dirs, files) in os.walk(LinksPath):
        if 'info.py' in files:
            infoFilePY = open(path+'/info.py', 'r')
            infoTextPY = infoFilePY.read()
            infoFilePY.close()
            
            infoTextPHP = '<?php\n$infoArray = '+infoTextPY+';\n?>'
            infoTextPHP = infoTextPHP.replace("': ", "' => ")
            infoTextPHP = infoTextPHP.replace("{", "array(")
            infoTextPHP = infoTextPHP.replace("[", "array(")
            infoTextPHP = infoTextPHP.replace("]", ")")
            infoTextPHP = infoTextPHP.replace("}", ")")
            
            infoFilePHP = open(path+'/info.php', 'w')
            infoFilePHP.write(infoTextPHP)
            print(path+'/info.php')
            infoFilePHP.close()
        
if __name__ == '__main__':
    main()