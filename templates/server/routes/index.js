addRoutes = function(app) {

    // Home Page //
    app.router.get('/', function (req, res, next) {
        res.sendFile(path.join(__dirname, '../..//client/public/index.html'));
    });

    return app;
};

module.exports = addRoutes;