#declare $(python3 ../_py/ReadConfig.py)

docker build ../ --tag resume
docker build ../_py/ --tag datascraper

#cd ../
#envsubst Dockerfile < docker build -f -
#cd _py/
#envsubst Dockerfile < docker build -f -

#cd ../_setup