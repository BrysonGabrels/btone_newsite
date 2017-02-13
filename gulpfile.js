var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat');

var env,
	coffeeSources,
	jsSources,
	sassSources,
	htmlSources,
	jsonSources,
	sassStyle,
	outputDIR;

env = process.env.NODE_ENV || 'development';

if (env === 'development') {
	outputDIR = 'builds/development/'
	sassStyle = 'expanded'
} else {
	outputDIR = 'builds/production/'
	sassStyle = 'compressed'
}

coffeeSources = ['components/coffee/tagline.coffee'];
jsSources = [
	'components/scripts/*.js'
];
sassSources = ['components/sass/style.scss'];
htmlSources = [outputDIR + '*.html'];
jsonSources = [outputDIR + 'js/*.json']

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({ bare: true })
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest(outputDIR + 'js'))
		.pipe(connect.reload())
});

gulp.task('compass', function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'components/sass',
			image: outputDIR + 'images',
			style: sassStyle
		}))
		.on('error', gutil.log)
		.pipe(gulp.dest(outputDIR + 'css'))
		.pipe(connect.reload())
});

gulp.task('connect', function() {
	connect.server({
		root: outputDIR,
		livereload: true 
	})
});


gulp.task('html', function() {
	gulp.src(htmlSources)
	.pipe(connect.reload())
});

gulp.task('json', function() {
	gulp.src(jsonSources)
	.pipe(connect.reload())
});

gulp.task('watch', function() {
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss', ['compass']);
	gulp.watch(htmlSources, ['html']);
	gulp.watch(jsonSources, ['json']);
}); 


gulp.task('default', ['coffee', 'js', 'json', 'compass', 'watch', 'connect', 'html']);

