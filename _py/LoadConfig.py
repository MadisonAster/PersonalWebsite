import os, sys, yaml
from pprint import pprint

def Load_Config(ConfigFilePath):
    with open(ConfigFilePath, 'r') as stream:
        data_loaded = yaml.safe_load(stream)
    return dict(data_loaded)

def Create_CronJobs(Config, CronJobsPath, CronJobs_DestPath):
    with open(CronJobsPath, 'r') as file:
        filetext = file.read()
    for key in Config.keys():
        filetext = filetext.replace('{'+key+'}', str(Config[key]))
    with open(CronJobs_DestPath, 'w') as file:
        file.write(filetext)
    print(filetext)
    
def FireFox_CreatePrefs(Config, FireFox_PrefsPath, FireFox_PrefsDestPath):
    with open(FireFox_PrefsPath, 'r') as file:
        filetext = file.read()
    filetext = filetext.replace('{USERNAME}', Config['services.sync.username'])
    with open(FireFox_PrefsDestPath, 'w') as file:
        file.write(filetext)
    print(filetext)

if __name__ == '__main__':
    print('Running LoadConfig.py!')
    _py = os.path.dirname(os.path.abspath(__file__))
    
    ConfigFilePath = _py+'/config/userconfig.yaml'
    print('ConfigFilePath', ConfigFilePath)
    Config = Load_Config(ConfigFilePath)
    pprint(Config)
    
    CronJobsPath = _py+'/cronjobs.sh'
    CronTestPath = _py+'/crontest.sh'
    CronJobs_DestPath = '/etc/cron.d/cronjobs.sh'
    CronTest_DestPath = '/etc/cron.d/crontest.sh'
    print('CronJobsPath', CronJobsPath)
    Create_CronJobs(Config, CronJobsPath, CronJobs_DestPath)
    Create_CronJobs(Config, CronTestPath, CronTest_DestPath)
    
    FireFox_PrefsPath = _py+'/FirefoxPrefs.js'
    print('FireFox_PrefsPath', FireFox_PrefsPath)
    FireFox_PrefsDestPath = '/moz-headless/prefs.js'
    print('FireFox_PrefsDestPath', FireFox_PrefsDestPath)
    FireFox_CreatePrefs(Config, FireFox_PrefsPath, FireFox_PrefsDestPath)
    
    #Copy these files from your Firefox profile folder (usually in AppData)
    #to _py/config/firefoxprofile/ before running this script.
    #   key4.db
    #   logins.json
    #   signedInUser.json
    
    
    #To help find the path to your profile you can run:
    #/_py/config/firefoxprofile/get_profile.py
    