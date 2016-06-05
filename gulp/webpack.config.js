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

function addVendor() {
    var files = getEntry();
    files['vendor'] = ['jquery'];
    // console.log(files);
    return files;
}

module.exports = {
    cache: true,
    devtool: "inline-source-map",
    entry: addVendor(),
    output: {
        path: path.join(DIST_PATH, 'js'),
        publicPath: "dist/js/",
        filename: "[name].js"
    },
    module: {
        preLoaders: [{
            test: /\.js?$/,
            include: path.join(SRC_PATH, 'js'),
            exclude: [/node_modules/, path.join(SRC_PATH, 'js/lib')],
            loader: 'jshint-loader'
        }]
    },
    resolve: {
        alias: {
            jquery: SRC_PATH + '/js/lib/jquery-1.11.1.min.js'
        }
    },
    // any jshint option http://www.jshint.com/docs/options/
    jshint: {
        camelcase: true,
        eqeqeq: true,
        undef: true,
        browser: true,
        devel: true
    },
    externals: {
        threePlugin: 'window.plugin',
        artTemplate: 'window.template'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        // new webpack.IgnorePlugin(/\.js?$/, [path.join(SRC_PATH, 'js/lib')])
    ]
};
