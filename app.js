const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const express = require('express');
const app = express();

const port = process.env.PORT || 2222;

const compiler = webpack(config);
const devMiddleware = webpackDevMiddleware(compiler, {publicPath: config.output.publicPath});
app.use(devMiddleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, `${config.output.path}/index.html`));
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});

