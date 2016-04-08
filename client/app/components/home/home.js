import angular from 'angular';
import 'ngcomponentrouter';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
	'ngComponentRouter'
])
.directive('home', homeComponent);

export default homeModule;