veekun_pokedex_repository = ../pokedex
local_config = --settings=config.local
docker_config = --settings=config.docker-compose
gql_compose_config = -f docker-compose.yml -f Resources/compose/docker-compose-prod-graphql.yml

.PHONY: help
.SILENT:

help:
	@grep -E '^[a-zA-Z_-]+:.*?# .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?# "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install:  # Install base requirements to run project
	pip install -r requirements.txt

setup:  
	dotnet restore
	dotnet build
	pnpm install

clean:  # Remove any pyc files
	find . -type f -name '*.pyc' -delete
	npx rimraf --glob **/node_modules **/dist **/obj **/bin 

pull:
	git checkout main
	git pull

run-tye:
	dotnet dev-certs https -v -ep localhost.pfx -p 8b6039b6-c67a-448b-977b-0ce6d3fcfd49 -t
	docker-compose -f etc/docker/docker-compose.infrastructure.yml -f etc/docker/docker-compose.infrastructure.override.yml up -d
	export PATH="$PATH:/$HOME/.dotnet/tools"	
	tye run --watch
