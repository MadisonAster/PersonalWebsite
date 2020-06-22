FROM php:apache
COPY . /var/www/html
WORKDIR /var/www/html
EXPOSE 80

#FROM nginx
#COPY . /usr/share/nginx/html
#WORKDIR /usr/share/nginx/html
#EXPOSE 80
