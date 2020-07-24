FROM php:apache
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf