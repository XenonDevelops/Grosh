require('angular');
var postService = require('./post.factory');
var post = angular.module('post',[]);
post.factory('postService',postService);

module.exports = post;
