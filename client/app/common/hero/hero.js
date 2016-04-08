import angular from 'angular';
import 'ngcomponentrouter';
import heroComponent from './hero.component';

let heroModule = angular.module('hero', [
	'ngComponentRouter'
])
.directive('hero', heroComponent);

export default heroModule;