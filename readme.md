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
 - heroku's static cli
 - webpack (installed globally)

```
heroku plugins:install heroku-cli-static
npm install -g webpack
```

## deploying
run the heroku-deploy script (to ensure deploy script is executable: `chmod +x`)
```
./heroku_deploy.sh
```

### deployment-resources
- [heroku getting started with single page apps] (https://gist.github.com/hone/24b06869b4c1eca701f9)
- [heroku buildpack static](https://gist.github.com/hone/24b06869b4c1eca701f9)
