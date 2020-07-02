#declare $(python3 ../_py/ReadConfig.py)

docker build ../ --tag datascraper
docker build ./_webserver --tag resume

#cd ../
#envsubst Dockerfile < docker build -f -
#cd _py/
#envsubst Dockerfile < docker build -f -

#cd ../_setup