var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(process.cwd());
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

// 获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
    var jsPath = path.resolve(SRC_PATH, 'js');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [], files = {};
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        if (matchs) {
            files[matchs[1]] = path.resolve(SRC_PATH, 'js', item);
        }
    });
    return files;
}

module.exports = {
    cache: true,
    devtool: "source-map",
    entry: getEntry(),
    output: {
        path: path.join(DIST_PATH, 'js'),
        publicPath: "dist/js/",
        filename: "[name].js"
    },
    module: {
        preLoaders: [{
            test: /\.js?$/,
            include: SRC_PATH,
            exclude: /node_modules/,
            loader: 'jshint-loader'
        }]
    },

    // any jshint option http://www.jshint.com/docs/options/
    jshint: {
        camelcase: true,
        eqeqeq: true,
        undef: true
    }
};
