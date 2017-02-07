"use strict";


// Creates Angular Module
var myApp = angular.module("TedHead", ["ngRoute"]);

// Create configuration routes
myApp.config(function($routeProvider){
	$routeProvider
		.when('/aboutView', {
			templateUrl: 'components/1.aboutView/aboutView.html',
			controller: 'aboutController',
		})
		.when('/homeView', {
			templateUrl: 'components/2.homeView/homeView.html',
			controller: 'homeController',
		})	
		.when('/regView', {
			templateUrl: 'components/3.regView/regView.html',
			controller: 'regController',	
		})
		.when('/searchResView', {
			templateUrl: 'components/4.searchResView/searchResView.html',
			controller: 'searchResController',	
		})	
		.when('/toWatchView', {
			templateUrl: 'components/5.toWatchView/toWatchView.html',
			controller: 'toWatchController',	
		})	
		.when('/haveWatchedView', {
			templateUrl: 'components/6.haveWatchedView/haveWatchedView.html',
			controller: 'haveWatchedController',	
		})	
		.when('/selectedView', {
			templateUrl: 'components/7.selectedView/selectedView.html',
			controller: 'selectedController',	
		})	
		.when('/processView', {
			templateUrl: 'components/8.processView/processView.html',
			controller: 'processController',	
		})	
});