require('angular');
var profileController = require('./profile.controller');

var profile = angular.module('profile',[]);
profile.controller('profileController',profileController);

module.exports = profile;
