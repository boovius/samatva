var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new (require('express'))();
var port = 3000;

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(port, 'localhost', function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
    console.log('process env NODE_ENV = %s', process.env.NODE_ENV);
  }
});
