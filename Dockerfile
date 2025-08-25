FROM php:8.3-apache
# COPY ./.docker/php.ini /usr/local/etc/php/php.ini
COPY ./.docker/apache/000-default.conf /etc/apache2/sites-available/000-default.conf
RUN apt-get -y update && apt-get upgrade -y   libicu-dev   git
RUN set -eux;   apt-get update;   apt-get install -y   libzip-dev   libwebp-dev   libjpeg-dev   libpng-dev   libfreetype6-dev   zlib1g-dev   mariadb-server;   docker-php-ext-install zip
RUN a2enmod rewrite
RUN docker-php-ext-configure intl && docker-php-ext-install intl

# gd
RUN docker-php-ext-configure gd     --with-webp     --with-jpeg     --with-freetype
RUN docker-php-ext-install gd

# mysqli
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable mysqli

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html


