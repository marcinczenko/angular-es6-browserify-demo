var angular = require('angular');

var demoModule = angular.module('angular-es6-browserify-demo',[])
    
    .controller('DemoController', ['$scope', function($scope) {
        $scope.title = 'angular-es6-browserify-demo';
        $scope.description = 'AngularJS is so awesome!'
    }]);

module.exports = demoModule;
