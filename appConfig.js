"use strict";

// Initialize Firebase

// TODO: Replace with your project's customized code snippet (done
 
firebase.initializeApp ({
    apiKey: "AIzaSyBS2HVT-9E6_tjehelS6Ylcno7Gxg83iMI",
    authDomain: "tedhead-229a6.firebaseapp.com",
    databaseURL: "https://tedhead-229a6.firebaseio.com",
    storageBucket: "tedhead-229a6.appspot.com",
    messagingSenderId: "457843835699"
  });


// Creates Angular Module
var myApp = angular.module("TedHead", ["ngRoute"]);

// Creates configuration routes
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
		.when('/searchResView/:search', {
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
		.when('/selectedView/:videoId', {
			templateUrl: 'components/7.selectedView/selectedView.html',
			controller: 'selectedController',	
		})	
		.when('/processView', {
			templateUrl: 'components/8.processView/processView.html',
			controller: 'processController',	
		})	
});



  