const { dest, parallel, series, src, watch } = require('gulp')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const concat = require('gulp-concat')
const del = require('del')
const minify = require('gulp-minify')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')(require('sass'))
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const tildeImporter = require('node-sass-tilde-importer')
const sassGlob = require('gulp-sass-glob')


// Start configuration.
var config = {}
config.foundations = {
	scss: 'stories/foundations/**/_*.scss',
	js: 'stories/foundations/**/*.behaviors.js',
}
config.components = {
	scss: 'stories/components/**/_*.scss',
	js: 'stories/components/**/*.behaviors.js',
	twig: ['stories/components/**/*.twig', '!stories/components/**/*.local.twig'],
}
config.stylesMain = 'stories/main.scss'
config.public = {
	css: 'public/css',
	img: 'public/img/*',
}
config.dist = {
	all: 'dist/*/',
	css: 'dist/css',
	js: 'dist/js',
	twig: 'dist/components',
	img: 'dist/img',
}

// Start tasks.

// Clean out dist directory.
const cleanDist = (done) => {
	del.sync(config.dist.all)
	done()
}

// Compile all scss to css and minify.
const compileStyles = (done) => {
	src(config.stylesMain)
		.pipe(sassGlob())
		.pipe(sass({
            importer: tildeImporter
          }).on("error", sass.logError))
        .pipe(concat('style.css'))
		.pipe(dest(config.public.css))
        .pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(dest(config.dist.css))
		.pipe(
			rename({
				extname: '.min.css',
			})
		)
		.pipe(dest(config.dist.css))
	done()
}

// Watch for scss changes + recompile.
const watchStyles = () => {
	watch(
		[
			config.stylesMain,
			config.foundations.scss,
			config.components.scss,
		],
		compileStyles
	)
}

// Compile js to a single file and minify.
const compileJs = (done) => {
	src([config.foundations.js, config.utilities.js, config.components.js])
		.pipe(concat('sb-main.js'))
		.pipe(dest(config.dist.js))
		.pipe(
			minify({
				ext: {
					min: '.min.js',
				},
			})
		)
		.pipe(dest(config.dist.js))
	done()
}

// Watch for js changes + recompile.
const watchJs = () => {
	watch(
		[config.foundations.js, config.utilities.js, config.components.js],
		compileJs
	)
}

// Collect Twig files for dist.
const collectTwig = (done) => {
	src(config.components.twig)
		.pipe(replace('"../../', '"@components/'))
		.pipe(replace('"../', '"@components/'))
		.pipe(dest(config.dist.twig))
	done()
}

// Watch for Twig changes + re-collect.
const watchTwig = () => {
	watch(config.components.twig, collectTwig)
}

exports.default = series(
	cleanDist,
	compileStyles,
	//  compileJs,
	collectTwig,
	// parallel(watchStyles, watchJs, watchTwig)
	parallel(watchStyles)
)