var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');

module.exports = function (gulp, plugins, config) {

    // 使用gulp运行开发期间的webpack
    gulp.task('webpack:dev', function(callback) {
        var myDevConfig = Object.create(webpackConfig);
        var devCompiler = webpack(myDevConfig);
        devCompiler.run(function(err, stats) {
            if (err) {
                throw new plugins.util.PluginError('webpack:build-js', err);
            }
            plugins.util.log('[webpack:build-js]', stats.toString({
                colors: true
            }));
            callback();
        })
    });

    // webpack执行命令
    gulp.task('webpack:shell', plugins.shell.task([
        'webpack --watch --process --colors --config gulp/webpack.config.js'
    ]));

    // 添加js文件版本号
    gulp.task('rev:js', function() {
        return gulp.src(config.tmp + 'js/**/*.js')
            .pipe(plugins.rev())
            .pipe(gulp.dest(config.dist + 'js'))
            .pipe(plugins.rev.manifest())
            .pipe(gulp.dest(config.tmp + 'rev/js'));
    });

    // 复制js文件到dist目录
    gulp.task('copy:js', function() {
        return gulp.src(config.src + 'js/**/*.js')
            .pipe(plugins.newer(config.dist + 'js'))
            .pipe(plugins.contribCopy())
            .pipe(gulp.dest(config.dist + 'js'));
    });

    // 复制第三方js文件到dist目录
     gulp.task('copy:libJs', function() {
        return gulp.src(config.src + 'js/lib/**/*.js')
            .pipe(plugins.contribCopy())
            .pipe(gulp.dest(config.dist + 'js/lib'));
    });
};
