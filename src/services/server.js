const http = require('http');
const express = require('express');
const routes = require('../routes');
const serverConfigs = require('../configs/serverConfigs');

let httpServer;

function initialize() {
    return new Promise((resolve, reject) => {
      const app = express();
      httpServer = http.createServer(app);
   
      app.use(routes);
   
      httpServer.listen(serverConfigs.port)
        .on('listening', () => {
          console.log(`Web server listening on localhost:${serverConfigs.port}`);
   
          resolve();
        })
        .on('error', err => {
          reject(err);
        });
    });
};
module.exports.initialize = initialize;