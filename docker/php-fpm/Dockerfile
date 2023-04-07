FROM php:8.1-fpm-buster

ENV NODE_VERSION="18.15.0"

ARG UID=1000

WORKDIR /var/www/symfony

RUN apt-get -y update \
    && apt-get install -y git \
    zip \
    unzip \
    nano \
    && docker-php-ext-install pdo_mysql \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && curl -L -o /tmp/nodejs.tar.gz https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz \
    && tar xfvz /tmp/nodejs.tar.gz -C /usr/local --strip-components=1 \
    && rm -f /tmp/nodejs.tar.gz \
    && npm install yarn -g \
    && usermod -u ${UID} www-data \
    && chown ${UID}:${UID} . \
    && chown ${UID}:${UID} /var/www \