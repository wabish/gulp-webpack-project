var path = require('path');
var ROOT_PATH = path.resolve(process.cwd());
var SRC_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = function () {
    var config = {
        src: 'src/',            // 开发目录
        dist: 'dist/',          // 打包目录
        tmp: 'tmp/',            // 临时构建目录
        task: './gulp/tasks/',  // gulp任务目录

        // 域名
        proxy: 'http://cloud.xxx.com',

        // 精简命名
        alias: {
            jquery: SRC_PATH + '/js/lib/jquery-1.11.1.min.js'
        },

        // 全局第三方
        externals: {
            threePlugin: 'window.plugin',
            artTemplate: 'window.template'
        }
    };
    return config;
};
