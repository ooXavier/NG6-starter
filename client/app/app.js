import angular from 'angular';
import 'ngcomponentrouter';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

import template from './app.html!text';

let appModule = angular.module('app', [
    'ngComponentRouter',
	Common.name,
	Components.name
]).value('$routerRootComponent', 'app')
//.component('app', AppComponent);
    .component('app', {
        template,
        $routeConfig: [
          {path: '/home', name: 'Home', component: 'home', useAsDefault: true},
          {path: '/about', name: 'About', component: 'about' }
        ]
    });

/*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */
var container = document.getElementById('app-container');
var noAngularDOM;

angular.element(document).ready(() => {
	if(location.origin.match(/localhost/)) {
		System.trace = true;
		noAngularDOM = container.cloneNode(true);
		if ((!System.hotReloader)) {
			System.import('capaj/systemjs-hot-reloader').then(HotReloader => {
				System.hotReloader = new HotReloader.default('http://localhost:8081/');
				System.hotReloader.on('change', function (name) {
					console.log(name, 'changed')
				})
			})
		}
	}
	angular.bootstrap(container, [appModule.name]), {
		strictDi: true
	}
});

export default appModule;
export function __unload(){
	container = document.getElementById('app-container');
	container.remove();
	document.body.appendChild(noAngularDOM.cloneNode(true));
}
