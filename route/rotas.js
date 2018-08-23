angular.module("rev").config(function($routeProvider) {

    $routeProvider
    .when("/", {
        templateUrl : "./view/login/login.html",
        controller : "login-controller"
        })
    .when("/main", {
        templateUrl : "./view/index.html",
        controller : "main-controller"
        })
    .otherwise({ redirectTo : "./view/login/login.html"});
    });