
// Initial test to confirm correct routing

"use strict"

myApp.controller("searchResController", function($scope, searchResFactory) {

console.log("I am the searchResController!");




$scope.test = function (searchInput) {

console.log(searchInput);

console.log("test 2")



}

// Function loadTedChannel is in searchResFactory.js, line 3
searchResFactory.loadTedChannel();





});

