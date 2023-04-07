EXEC_AS_ROOT= docker compose exec php-fpm
EXEC_AS_WEB= docker compose exec --user=www-data php-fpm
CONSOLE= $(EXEC_AS_WEB) bin/console

.PHONY: streaming@start

#################
#   DOCKER    #
#################
docker@build: docker-compose.yml
	docker compose build

docker@up: docker@build
	docker compose up -d

#################
#   COMPOSER    #
#################
composer@vendor: composer.json
#	$(EXEC_AS_WEB) composer install

composer@require:
	$(EXEC_AS_WEB) composer require $(bundle)

composer@remove:
	$(EXEC_AS_WEB) composer remove $(bundle)

#################
#   YARN    	#
#################
yarn@node_modules: package.json
	$(EXEC_AS_WEB) yarn install

yarn@command:
	$(EXEC_AS_WEB) $(command)

yarn@add:
	$(EXEC_AS_WEB) yarn add $(package)

yarn@remove:
	$(EXEC_AS_WEB) yarn remove $(package)

yarn@watch:
	$(EXEC_AS_WEB) yarn watch

#################
#   SYMFONY    #
#################
symfony@console:
	$(CONSOLE) $(command)

#################
#   DATABASE    #
#################
##Wait for db to be ready
symfony@wait-for-db:
	$(EXEC_AS_ROOT) php -r "set_time_limit(60);for(;;){if(@fsockopen('mysql',3306)){break;}echo \"Waiting for MySQL\n\";sleep(1);}"

symfony@db: composer@vendor symfony@wait-for-db
	$(CONSOLE) doctrine:database:drop --force --if-exists
	$(CONSOLE) doctrine:database:create --if-not-exists
	$(CONSOLE) doctrine:migrations:migrate -n
	$(CONSOLE) doctrine:schema:update --force
#	$(CONSOLE) doctrine:fixtures:load -n

#################
#   STREAMING    #
#################
streaming@start: docker@up symfony@db yarn@node_modules yarn@watch

streaming@stop:
	docker compose down
