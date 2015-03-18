var app = require('../app');

// set the development environment
process.env.NODE_ENV = 'development';
process.env.PORT = process.env.PORT || 3000;

// start the app
app.initialize();