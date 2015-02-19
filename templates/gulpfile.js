var gulp    = require('gulp');
var shell   = require('gulp-shell');
var nodemon = require('gulp-nodemon')
var jshint  = require('gulp-jshint');

gulp.task('lint', function(){

});

gulp.task('d', shell.task(['node-debug server/app/environments/development.js']));
gulp.task('default', shell.task(['node server/app/environments/development.js']));

//gulp.task('default', function(){
//    //nodemon({ script: 'server/app/environments/development.js', ext: 'html js', ignore: ['ignored.js'] })
//    //    .on('change', ['lint'])
//    //    .on('restart', function () {
//    //        console.log('restarted!')
//    //    });
//    shell.task([
//        'node server/app/environments/development.js'
//    ]);
//});