##
## ----------------------------------------------------------------------------
##   Environment
## ----------------------------------------------------------------------------
##

install: ## Install dependencies and build assets
	yarn install
	grunt build

build: ## Build assets
	grunt build

.PHONY: install build

##
## ----------------------------------------------------------------------------
##   Steps
## ----------------------------------------------------------------------------
##

start: ## Beginning of the workshop
	git checkout -- .
	git checkout start
	grunt watch

procedural: ## Step 1 : Procedural script
	git checkout -- .
	git checkout procedural
	grunt watch

object: ## Step 2 : Create an object
	git checkout -- .
	git checkout object
	grunt watch

variables: ## Step 3 : Move global variables
	git checkout -- .
	git checkout variables
	grunt watch

conversion: ## Step 4 : Convert procedural function to object method
	git checkout -- .
	git checkout conversion
	grunt watch

custom: ## Step 5 : Add several object methods
	git checkout -- .
	git checkout custom
	grunt watch

optimisation: ## Step 6 : Use object to boost performance
	git checkout -- .
	git checkout optimisation
	grunt watch

refactoring: ## Step 7 : Simple function for simple maintenance
	git checkout -- .
	git checkout refactoring
	grunt watch

javascript: ## Step 8 : Convert your code in es6
	git checkout -- .
	git checkout master
	grunt watch

.PHONY: start procedural object variables conversion custom optimisation refactoring javascript

.DEFAULT_GOAL := help
help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' \
		| sed -e 's/\[32m##/[33m/'
.PHONY: help
