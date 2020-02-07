const server = require('./services/server');
 
async function startup() {
  try {
    await server.initialize();
  } catch (err) {
    console.error(err);
  }
};
startup();