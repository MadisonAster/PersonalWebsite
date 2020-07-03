import sys, os, yaml

def main(ConfigFilePath = None):
    _py = os.path.dirname(os.path.abspath(__file__))
    htmldir = _py.rsplit('_py',1)[0].rstrip('/')
    if ConfigFilePath == None:
        if os.path.exists(htmldir+'/_config/myuserconfig.yaml'):
            ConfigFilePath = htmldir+'/_config/myuserconfig.yaml' #for development
        else:
            ConfigFilePath = htmldir+'/_config/userconfig.yaml'
    else:
        ConfigFilePath = htmldir+'/'+ConfigFilePath
    with open(ConfigFilePath, 'r') as stream:
        data_loaded = yaml.safe_load(stream)
    for key, value in dict(data_loaded).items():
        print('export '+str(key)+'='+str(value))

if __name__ == '__main__':
    if len(sys.argv) > 1:
        ConfigFilePath = sys.argv[1]
        main(ConfigFilePath = ConfigFilePath)
    else:
        main()