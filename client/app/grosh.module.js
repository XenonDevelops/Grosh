require('angular');
require('angular-ui-router');
require('angular-local-storage');

var user = require('./user/user.module');
var menuBar = require('./menu-bar/menu-bar.module');
var login = require('./login/login.module');
var home = require('./home/home.module');
var profile = require('./profile/profile.module');
var group = require('./group/group.module');
var post = require('./post/post.module');

var Grosh = angular.module('grosh',['ui.router','menuBar','user','login','home','profile', 'group','post','LocalStorageModule']);

Grosh.run(['$rootScope', '$state','loginService', function($rootScope, $state,loginService) {
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams){
		var requireLogin = toState.data.requireLogin;
		if(requireLogin && !(loginService.loggedIn())){
			event.preventDefault();
			$state.go('login');
		}
		if(!(requireLogin) && loginService.loggedIn()){
			event.preventDefault();
			$state.go('home');
		}

		if(toState.name === 'group'){
			if(!toParams.group){
				event.preventDefault();
				$state.go('home');
			}
		}
		if(toState.name === 'profile'){
			if(!toParams.profile){
				event.preventDefault();
				$state.go('home');
			}
		}
	});
}]);

Grosh.config([
	'$stateProvider','$urlRouterProvider','localStorageServiceProvider','$locationProvider','$httpProvider',
	function($stateProvider,$urlRouterProvider,localStorageServiceProvider,$locationProvider,$httpProvider){
		//$locationProvider.html5Mode(true);
		 $httpProvider.interceptors.push("addTokenService");
		 $httpProvider.interceptors.push("responseErrorService");
		 localStorageServiceProvider.setPrefix('grosh')
		 .setStorageCookie(45,'/')
		 .setStorageCookieDomain('')
		 .setNotify(true, true);
		 $urlRouterProvider.otherwise('/');
		$stateProvider
                .state('login', {
		            url: '/',
		            templateUrl: './app/login/login.partial.html',
		            controller: 'loginController',
				    data: {
				      requireLogin: false,
				      id:'login'
				    }		           
		        })	
                .state('home', {
		            url: '/home',
		            templateUrl: './app/home/home.partial.html',
		            controller: 'homeController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		        .state('settings', {
		            url: '/settings',
		            templateUrl: './app/home/settings.partial.html',
		            controller: 'settingsController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		        .state('createGroup', {
		            url: '/createGroup',
		            templateUrl: './app/group/group.partial.html',
		            controller: 'groupController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		        .state('profile', {
		            url: '/profile/:profile',
		            templateUrl: './app/profile/profile.partial.html',
		            controller: 'profileController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		        .state('group', {
		            url: '/group/:group',
		            templateUrl: './app/group/group-detail.partial.html',
		            controller: 'groupController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		        .state('group.newPost', {
		            url: '/newPost',
		            templateUrl: './app/post/post.partial.html',
		            controller: 'groupController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		        .state('group.addCover', {
		            url: '/addCover',
		            templateUrl: './app/home/add-img.partial.html',
		            controller: 'groupController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })

		       .state('myGroups', {
		            url: '/myGroups/',
		            templateUrl: './app/group/group-list.partial.html',
		            controller: 'groupListController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })			        
		    }]);
