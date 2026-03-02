FROM php:8.3-fpm-alpine

# Install Postgres driver dependencies
RUN apk add --no-cache postgresql-dev

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_pgsql

# Get Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html