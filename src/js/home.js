var $ = require('jquery');
var template = require('artTemplate');
var test = require('./other/test.js');

var data = {
    title: '标签',
    list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
};
var html = template('test', data);
$('#tplBox').html(html);


test.run();
