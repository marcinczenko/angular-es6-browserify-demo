import 'angular/angular.js';

let demoModule = angular.module('angular-es6-browserify-demo',[])
    
    .controller('DemoController', ['$scope', ($scope) => {
        $scope.title = 'angular-es6-browserify-demo';
        $scope.description = 'AngularJS is so awesome!';
    }]);

export default demoModule;
