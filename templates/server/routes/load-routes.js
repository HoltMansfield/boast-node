createRoutes = function (app) {
    require('./index')(app);
    //require('../routes/search')(router);
    //require('../routes/auth')(passport, router);
    //require('../routes/api/profiles')(router);
    //require('../routes/api/companies')(router);
    //require('../routes/api/users')(router);
    //require('../routes/api/social')(router);
    //require('../routes/api/s3')(router);
    //require('../routes/api/captcha')(router);

    app.express.use('/', app.router);

    console.log('~ Routes created');
};

module.exports = {
    createRoutes: createRoutes,
};

