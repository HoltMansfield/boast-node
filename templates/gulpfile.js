var gulp    = require('gulp');
var shell   = require('gulp-shell');
var nodemon = require('gulp-nodemon')
var jshint  = require('gulp-jshint');

// gulp-inject packages
var inject = require("gulp-inject");
var mainBowerFiles = require('main-bower-files');
var angularFilesort = require('gulp-angular-filesort');
var print = require('gulp-print');

gulp.task('d', shell.task(['node-debug server/app/environments/development.js']));
gulp.task('default', shell.task(['node server/app/environments/development.js']));

function getScriptTagOrLinkTag(filepath) {
  if(filepath.indexOf('.css') === -1)
    return '<script src="'
           +filepath.replace('/client/public','')  +'"></script>';
  else
    return '<link rel="stylesheet" type="text/css" href="'
            +filepath.replace('/client/public/','')
            +'">';
}

gulp.task('inject', function () {
  var target = gulp.src('./client/public/index.html');

  var bower = gulp.src(mainBowerFiles({
      paths: {
          bowerDirectory: './client/public/bower',
          bowerrc: './.bowerrc',
          bowerJson: './bower.json'
      }
  }));

  target.pipe(inject(bower,
  {
    name: 'bower',
    transform: function (filepath, file, i, length) {
      return getScriptTagOrLinkTag(filepath);
    }
  }))
  .pipe(print())
  .pipe(gulp.dest('./client/public'));

  var sources = gulp.src(['./client/public/javascript/**/**/*.js', './client/public/css/**/*.css'], {read: false});

  target.pipe(inject(sources,
  {
    name: 'main',
    transform: function (filepath, file, i, length) {
      return getScriptTagOrLinkTag(filepath);
    }
  }))
  .pipe(gulp.dest('./client/public'));
});

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
