"""
#===============================================================================
# @author: Madison Aster
# @description: 
#   Copies these files from the first firefox profile found into _py/config/firefoxprofile/
#       key4.db
#       logins.json
#       signedInUser.json
#===============================================================================
"""
import os, shutil


def main(username):
    profile_path = GetProfilePath(username)
    source_filepaths = [
    profile_path+'/key4.db',
    profile_path+'/logins.json',
    profile_path+'/signedInUser.json',
    ]
    
    dest_path = os.path.dirname(os.path.abspath(__file__))
    for source_path in source_filepaths:
        print('Copying...', source_path, 'to', dest_path)
        shutil.copy(source_path, dest_path)
    print('Finished!')


def GetProfilePath(username):
    profiles_path = "C:/Users/"+username+"/AppData/Roaming/Mozilla/Firefox/Profiles"
    profile_path = profiles_path+'/'+[i for i in os.listdir(profiles_path) if i.endswith('.default-release')][0]
    return profile_path


if __name__ == '__main__':
    username = input("Enter windows username:")
    main(username)