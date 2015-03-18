var express = require('express');
var path    = require('path');
var Q       = require('q');

var favicon        = require('serve-favicon');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var expressJson    = require('express-json');
var expressSession = require('express-session');

module.exports.initialize = function() {
    var deferred = Q.defer();
    "use strict";

    var app = express();
    var router = express.Router();

    console.log("PATH: "+__dirname);

    app.use(express.static(path.join(__dirname, '../..//client/public')));

    console.log('~ Express Initialized');

    deferred.resolve({
        express: app,
        router: router
    });

    return deferred.promise;
};

