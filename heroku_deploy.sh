#! /bin/sh

NODE_ENV=production webpack -p && heroku static:deploy --app react-fire

