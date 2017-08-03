'use strict';

const express = require(`express`),
      app = express(),
      api = require(`./api/v1/index.js`);

let NODE_PORT = process.env.NODE_PORT || 3000;

app.use('/api/v1', api);

app.use(express.static(`dist`));
app.use(express.static(`static`)); 

app.get(`/*`, (req, res) => {
  res.end(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>React/Webpack template</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css" rel="stylesheet">
      </head>
      <body style="margin:0;font-family:'Roboto',sans-serif;overflow: hidden;">
        <div id="app"></div>

        <script type="text/javascript" src="/vendor.bundle.min.js"></script>
        <script type="text/javascript" src="/app.bundle.min.js"></script>
      </body>
    </html>
  `.replace(/\n/g, '').replace(/\s+/g, ' ').replace(/\>\s\</g, '><'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
});

app.listen(NODE_PORT, () => {
  console.log(`http server listening on port ${ NODE_PORT }`)
});
