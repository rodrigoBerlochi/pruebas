var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var fs = require('fs');
var header = require("gulp-header");
 
// functions
 
// Get version using NodeJs file system
var getVersion = function () {
    return fs.readFileSync('./static/Version.txt');
};
 
// Get copyright using NodeJs file system
var getCopyright = function () {
    return fs.readFileSync('./static/Copyright.txt');
};

//main js task
gulp.task('default-js', function() {
  // place code for your default task here
  
  gulp.src('./js/development/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter())
	.pipe(uglify())
	.pipe(concat('concat.js'))
	.pipe(header(getCopyright(), {version: getVersion() }))
	.pipe(gulp.dest('./js/distribution'));
  
  /*gulp.src('./client/templates/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./build/templates'))
  .pipe(minify())
  .pipe(gulp.dest('./build/minified_templates'));*/
  
  /*// task
gulp.task('minify-html', function () {
    gulp.src('./Html/*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('path/to/destination'));
});*/

/*gulp.task('minify-js', function () {
    gulp.src('./JavaScript/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('path/to/destination'));
});*/

/* less = require("gulp-less");
 
// task
gulp.task('compile-less', function () {
    gulp.src('./Less/one.less') // path to your file
    .pipe(less())
    .pipe(gulp.dest('path/to/destination'));
});*/

/*var gulp = require('gulp')
, sass = require("gulp-sass");
 
// task
gulp.task('compile-sass', function () {
    gulp.src('./Sass/one.sass') // path to your file
    .pipe(sass())
    .pipe(gulp.dest('path/to/destination'));
});*/

/*// including plugins
var gulp = require('gulp')
, babel = require("gulp-babel");
 
// task
gulp.task('compile-es6', function () {
    gulp.src('./ES6/one.es6.js')
        .pipe(babel())
    .pipe(gulp.dest('path/to/destination'));
});*/

/*, jshint = require("gulp-jshint");
 
// task
gulp.task('jsLint', function () {
    gulp.src('./JavaScript/*.js') // path to your files
    .pipe(jshint())
    .pipe(jshint.reporter()); // Dump results
});*/

/*// including plugins
var gulp = require('gulp')
, concat = require("gulp-concat");
 
// task
gulp.task('concat', function () {
    gulp.src('./JavaScript/*.js') // path to your files
    .pipe(concat('concat.js'))  // concat and name it "concat.js"
    .pipe(gulp.dest('path/to/destination'));
});*/

/*// including plugins
var gulp = require('gulp')
, fs = require('fs')
, concat = require("gulp-concat")
, header = require("gulp-header");
 
// functions
 
// Get version using NodeJs file system
var getVersion = function () {
    return fs.readFileSync('Version');
};
 
// Get copyright using NodeJs file system
var getCopyright = function () {
    return fs.readFileSync('Copyright');
};
 
// task
gulp.task('concat-copyright-version', function () {
    gulp.src('./JavaScript/*.js')
    .pipe(concat('concat-copyright-version.js')) // concat and name it "concat-copyright-version.js"
    .pipe(header(getCopyrightVersion(), {version: getVersion()}))
    .pipe(gulp.dest('path/to/destination'));
});*/

/*todo en una
// including plugins
var gulp = require('gulp')
, fs = require('fs')
, coffeelint = require("gulp-coffeelint")
, coffee = require("gulp-coffee")
, uglify = require("gulp-uglify")
, concat = require("gulp-concat")
, header = require("gulp-header");
 
// functions
 
// Get version using NodeJs file system
var getVersion = function () {
    return fs.readFileSync('Version');
};
 
// Get copyright using NodeJs file system
var getCopyright = function () {
    return fs.readFileSync('Copyright');
};
 
// task
gulp.task('bundle-one', function () {
    gulp.src('./CoffeeScript/*.coffee') // path to your files
    .pipe(coffeelint()) // lint files
    .pipe(coffeelint.reporter('fail')) // make sure the task fails if not compliant
    .pipe(concat('bundleOne.js')) // concat files
    .pipe(coffee()) // compile coffee
    .pipe(uglify()) // minify files
    .pipe(header(getCopyrightVersion(), {version: getVersion()})) // Add the copyright
    .pipe(gulp.dest('path/to/destination'));
});
*/

/*// task
gulp.task('watch-coffeescript', function () {
    gulp.watch(['./CoffeeScript/*.coffee'], ['compile-coffee']); -> src, nombre de la task antes creada
})*/



});