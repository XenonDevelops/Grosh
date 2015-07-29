require('angular');
var controller = require('./group.controller');
var groupService = require('./group.factory');
var groupListController = require('./group-list.controller');
var group = angular.module('group',[]);

group.controller('groupController',controller);
group.controller('groupListController',groupListController);

group.factory('groupService',groupService);

module.exports = group;