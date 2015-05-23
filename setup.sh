#!/bin/bash

sudo apt-get install -y nodejs npm ruby golang
sudo gem install sass
sudo npm install -g grunt grunt-cli
sudo npm install -g \
	grunt-contrib-jshint \
	grunt-contrib-concat \
	grunt-contrib-uglify \
	grunt-sass \
	grunt-contrib-watch



# project setup

npm init
npm install grunt
npm install \
	grunt-contrib-jshint \
	grunt-contrib-concat \
	grunt-contrib-uglify \
	grunt-sass \
	grunt-contrib-watch

# run grunt once
grunt
