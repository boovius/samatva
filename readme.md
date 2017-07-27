Samatva
================================================

A balance app
-------------

by [Boovius](https://github.com/boovius)
----------------------------------------

# Install

 - ```npm install```

# Running
 - ```npm start```

# Testing
 - ```npm test```

# Deployment
Samatva is an SPA served from Heroku through their static cli-plugin

## local deployment dependencies
deploying with Heroku's static cli requires the following:

```
heroku plugins:install heroku-cli-static
```

## deploying
run the heroku-deploy script (to ensure deploy script is executable: `chmod +x`)
```
./heroku_deploy.sh
```
