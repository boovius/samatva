#! /bin/sh

export $(cat .env | xargs)
NODE_ENV=production webpack -p && heroku static:deploy --app react-fire

