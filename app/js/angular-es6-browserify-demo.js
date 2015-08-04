import 'angular/angular.js';
import DemoController from './demo-controller.js'
import '../stylesheets/index.css';

let demoModule = angular.module('angular-es6-browserify-demo',[]);
    
demoModule.controller('DemoController', /*@ngInject*/ DemoController);

export default demoModule;
