var gulp = require('gulp');

// 顺序执行任务插件
var runSequence = require('run-sequence');

// 自动刷新浏览器工具
var browserSync = require('browser-sync').create();

// 配置文件
var config = require('./gulp/gulp.config')();

// 加载插件
var plugins = require('gulp-load-plugins')();

// 子任务列表
var gulpTaskList = require('fs').readdirSync(config.task);

// 遍历子任务
gulpTaskList.forEach(function(taskfile) {
    require(config.task + taskfile)(gulp, plugins, config, browserSync);
});

// 说明帮助
gulp.task('help',function () {
    console.log('******************************************************');
    console.log('*                                                    *');
    console.log('*   # 开发监控，不监听js改动                         *');
    console.log('*   - gulp dev                                       *');
    console.log('*   - gulp webpack                                   *');
    console.log('*                                                    *');
    console.log('*   # 开发监控，监听js改动                           *');
    console.log('*   - gulp watch                                     *');
    console.log('*                                                    *');
    console.log('*   # 开发监控，浏览器自动刷新，不监听js改动         *');
    console.log('*   - gulp serve                                     *');
    console.log('*   - gulp webpack                                   *');
    console.log('*                                                    *');
    console.log('*   # 开发监控，浏览器自动刷新，监听js改动           *');
    console.log('*   - gulp browser                                   *');
    console.log('*                                                    *');
    console.log('*   # 打包上线                                       *');
    console.log('*   - gulp build                                     *');
    console.log('*                                                    *');
    console.log('******************************************************');
});

// 开发监控，不监听js改动
gulp.task('dev', function(cb) {
    runSequence(
        ['clean:dist', 'clean:tmp'],
        ['copy:img', 'sass', 'include', 'copy:libJS'],
        'watch:withoutJS',
        cb
    );
});

// 开发监控，监听js改动
gulp.task('watch', function(cb) {
    runSequence(
        ['clean:dist', 'clean:tmp'],
        ['copy:img', 'sass', 'include', 'webpack:dev', 'copy:libJS'],
        'watch:withJS',
        cb
    );
});

// 开发监控，浏览器自动刷新，不监听js改动
gulp.task('serve', function(cb) {
    runSequence(
        ['clean:dist', 'clean:tmp'],
        ['copy:img', 'sass', 'include', 'copy:libJS'],
        'reload:withoutJS',
        cb
    );
});

// 开发监控，浏览器自动刷新，监听js改动
gulp.task('browser', function(cb) {
    runSequence(
        ['clean:dist', 'clean:tmp'],
        ['copy:img', 'sass', 'include', 'webpack:dev', 'copy:libJS'],
        'reload:withJS',
        cb
    );
});

// 打包上线
gulp.task('build', function(cb) {
    runSequence(
        ['clean:dist', 'clean:tmp'],
        'build:img',
        ['build:css', 'build:js'],
        'build:html',
        'clean:tmp',
        cb
    );
});
