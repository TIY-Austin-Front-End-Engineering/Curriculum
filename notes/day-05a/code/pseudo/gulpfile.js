'use strict';
var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var babelify = require('babelify');
var webserver = require('gulp-webserver');
var path = require('path');
var minimist = require('minimist');

var prompt = require('gulp-prompt');
var rimraf = require('gulp-rimraf');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

// add custom browserify options here
var customOpts = {
	entries: ['./scripts/main.js'],
	debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts).transform(babelify));

gulp.task('js-bundle', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

gulp.task('webserver', function() {
	gulp.src('./')
	.pipe(webserver({
		fallback: 'index.html',
		livereload: false,
		directoryListing: {
			enable: false,
			path: './'
		},
		open: true
	}));
});

gulp.task('serve', ['js-bundle', 'webserver', 'serve-sass'], function() {
	gulp.watch('styles/**/*.{scss,sass}', ['serve-sass']);
});

function bundle() {
	return b.bundle()
	// log errors if they happen
	.on('error', gutil.log.bind(gutil, 'Browserify Error'))
	.pipe(source('bundle.js'))
	// optional, remove if you don't need to buffer file contents
	.pipe(buffer())
	// optional, remove if you dont want sourcemaps
	.pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
	// Add transformation tasks to the pipeline here.
	.pipe(sourcemaps.write('./')) // writes .map file
	.pipe(gulp.dest('./scripts'));
}

gulp.task('serve-sass', function() {
	return gulp.src('styles/**/*.{scss,sass}')
	.pipe(sass({
		errLogToConsole: true
	}).on('error', sass.logError))
	.on('error', function(err) {
		console.log(err);
	})
	.pipe(rename(function(p) {
		p.basename += '.sass';
		p.extname = '.css';
	}))
	.on('error', function(err) {
		console.log(err);
	})
	.pipe(rename(function(p) {
		p.basename += '.sass';
		p.extname = '.css';
	}))
	.pipe(gulp.dest(path.join('styles')));
});

gulp.task('build', ['clean', 'copy', 'js', 'css', 'sass', 'images']);

gulp.task('clean', function(cb) {
	var argv = validateCli();

	return gulp.src(argv.o, {read: false})
	.pipe(prompt.confirm('The output directory "'+path.join(__dirname, argv.o)+'" will be removed. Are you sure you want to do this?'))
	.pipe(rimraf());
});

gulp.task('copy', ['clean'], function() {
	var argv = validateCli();
	return gulp.src(['**/*', '!styles/**/*.scss', '!styles/**/*.sass'])
	.pipe(gulp.dest(argv.o));
});

gulp.task('js', ['copy'], function() {
	var argv = validateCli();

	var p = browserify('scripts/main.js', { debug: true })
	.transform(babelify)
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(buffer())
	.on('error', function (err) { console.log('Error : ' + err.message); });

	if(argv.min) {
		p.pipe(uglify());
	}

	p.pipe(gulp.dest(path.join(argv.o, 'scripts')));

	return p;
});

gulp.task('css', ['copy'], function() {
	var argv = validateCli();

	if(!argv.min) {
		return false;
	}

	return gulp.src('styles/**/*.css')
	.pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(gulp.dest(path.join(argv.o, 'styles')));
});

gulp.task('sass', ['copy'], function() {
	var argv = validateCli();

	var pi = gulp.src('styles/**/*.{scss,sass}')
	.pipe(sass({
		errLogToConsole: true
	}).on('error', sass.logError))
	.on('error', function(err) {
		console.log(err);
	})
	.pipe(rename(function(p) {
		p.basename += '.sass';
		p.extname = '.css';
	}));
	if(argv.min) {
		pi.pipe(minifyCss({compatibility: 'ie8'}));
	}
	pi.pipe(gulp.dest(path.join(argv.o, 'styles')));

	return pi;
});

gulp.task('images', ['copy'], function() {
	var argv = validateCli();

	if(!argv.min) {
		return false;
	}

	return gulp.src('images/**/*')
    .pipe(imagemin({
        progressive: true
    }))
    .pipe(gulp.dest(path.join(argv.o, 'images')));
});

function validateCli() {
	var argv = minimist(process.argv.slice(2));
	if(!argv.o) {
		throw 'You must specify and output directory for `gulp deploy`. Format: `gulp deploy -o outputdir [--minify]`';
	}
	return argv;
}