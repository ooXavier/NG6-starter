import angular from 'angular';
import 'ngcomponentrouter';
import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbar', [
	'ngComponentRouter'
])
.directive('navbar', navbarComponent);

export default navbarModule;