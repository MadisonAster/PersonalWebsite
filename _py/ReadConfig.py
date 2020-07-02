import sys, os, yaml

def main():
    _py = os.path.dirname(os.path.abspath(__file__))
    htmldir = _py.rsplit('_py',1)[0].rstrip('/')
    if os.path.exists(htmldir+'/_config/myuserconfig.yaml'):
        ConfigFilePath = htmldir+'/_config/myuserconfig.yaml' #for development
    else:
        ConfigFilePath = htmldir+'/_config/userconfig.yaml'
    with open(ConfigFilePath, 'r') as stream:
        data_loaded = yaml.safe_load(stream)
    for key, value in dict(data_loaded).items():
        print('export '+str(key)+'='+str(value))

if __name__ == '__main__':
    main()