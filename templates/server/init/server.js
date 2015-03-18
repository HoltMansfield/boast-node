module.exports.listen = function(app) {
    "use strict";
    var server = require('server');

    app.express.set('port', process.env.PORT);

    var server = app.express.listen(app.express.get('port'), function() {
        console.log('~ Express server listening on port #: ' + server.address().port);
    });
}