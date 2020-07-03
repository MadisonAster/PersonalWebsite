import sys, os, yaml

def main(ConfigFilePath, SearchKey):
    _py = os.path.dirname(os.path.abspath(__file__))
    htmldir = _py.rsplit('_py',1)[0].rstrip('/')
    ConfigFilePath = htmldir+'/'+ConfigFilePath
    
    with open(ConfigFilePath, 'r') as stream:
        YamlDict = dict(yaml.safe_load(stream))

    ResultList = []
    for value in RecurseKeys(YamlDict, SearchKey):
        ResultList.append(value)
    print(str(ResultList[0]))
    return ResultList[0]
        
def RecurseKeys(YamlDict, SearchKey):
    for key, value in YamlDict.items():
        if type(value) == dict:
            for a in RecurseKeys(value, SearchKey):
                yield a
        if key == SearchKey:
            yield value

if __name__ == '__main__':
    ConfigFilePath = sys.argv[1]
    SearchKey = sys.argv[2]
    main(ConfigFilePath, SearchKey)