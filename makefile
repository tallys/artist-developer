SHELL := $(SHELL) -e

VENDOR_PATH = ./vendor/ruby/2.0.0/gems

all: dependencies build

clean:
	rm -rf vendor build

dependencies:
	bundle install --path=vendor

build: dependencies
	bundle exec middleman build

watch: dependencies
	bundle exec middleman server

.PHONY: all dependencies build watch
