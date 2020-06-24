import os, sys, yaml
from pprint import pprint

def Load_Config(ConfigFilePath):
    with open(ConfigFilePath, 'r') as stream:
        data_loaded = yaml.safe_load(stream)
    return dict(data_loaded)

def Create_CronJobs(Config, CronJobsPath):
    with open(CronJobsPath, 'r') as file:
        filetext = file.read()
    for key in Config.keys():
        filetext = filetext.replace('{'+key+'}', Config[key])
    with open(CronJobsPath, 'w') as file:
        file.write(filetext)
    
def FireFox_CreateProfile(Config, FireFox_ProfilePath, FireFox_PrefsPath):
    with open(FireFox_PrefsPath, 'r') as file:
        filetext = file.read()
    filetext.replace('{USERNAME}', Config['services.sync.username'])
    with open(FireFox_PrefsPath, 'w') as file:
        file.write(filetext)

if __name__ == '__main__':
    ConfigFilePath = os.path(__file__).split('_py',1)[0]+'config/userconfig.yaml'
    Config = Load_Config(ConfigFilePath)
    
    
    CronJobsPath = os.path(__file__).split('_py',1)[0]+'cronjobs_example.sh'
    Create_CronJobs(Config, CronJobsPath)
    
    
    FireFox_ProfilePath = os.path(__file__).split('_py',1)[0]+'config/firefoxprofile/'
    FireFox_PrefsPath = os.path(__file__).split('_py',1)[0]+'FirefoxPrefs.js'
    FireFox_CreateProfile(Config, FireFox_ProfilePath, FireFox_PrefsPath)
    
    #Copy these files from your Firefox profile folder (usually in AppData)
    #to _py/config/firefoxprofile/ before running this script.
    #   key4.db
    #   logins.json
    #   signedInUser.json
    
    