// Exports a single method initialize that is called after the environment is set by one of the environment scripts //

module.exports.initialize = function() {
    var app;
    var expressMaker = require('../init/express');

    expressMaker.initialize().then(function(data){
        app = data;

        var routeMaker = require('../routes/load-routes');
        routeMaker.createRoutes(app);

        var serverMaker = require('../init/server');
        serverMaker.listen(app);
    });
};
