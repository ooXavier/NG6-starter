import angular from 'angular';
import 'ngcomponentrouter';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
	'ngComponentRouter'
])
.directive('about', aboutComponent);

export default aboutModule;