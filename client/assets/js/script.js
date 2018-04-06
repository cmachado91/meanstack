var app = angular.module("app", []);

app.controller("HelloController", function($scope) {
    $scope.message = "Hello, AngularJS";
    $scope.yo = 2 + 2;
    $scope.test_three = 'Fun stuff';
});

app.controller("HelloController2", function($scope) {
    $scope.message = "Hello, AngularJS";
    $scope.test = 0;
});