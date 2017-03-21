import * as components from './index.components';
import * as config from './index.config';
import * as run from './index.run';

const App = angular.module(
	'sjoPintor', [
	// plugins
	require('angular-ui-router'),
	'ngAnimate',
		'LocalStorageModule',
		'ngCookies',
		'ngSanitize',
		'ngMessages',
		'ngAria',
		'ngMaterial',
		'satellizer',
		'pascalprecht.translate',
		'oc.lazyLoad',
		'angulartics',
		'angulartics.google.analytics',
		'pascalprecht.translate',
		'tmh.dynamicLocale',

	// core
	require('./core/core.module').name,

	// components
	require('./index.components').name,

	// routes
	require('./index.routes').name,

	// pages
	require('./pages/home/home.module').name,
	require('./pages/residential-painting/residential-painting.module').name,
	require('./pages/commercial-painting/commercial-painting.module').name,
	require('./pages/faq/faq.module').name,
	require('./pages/about-us/about-us.module').name,
	require('./pages/booking/booking.module').name,
	// Add new pages above
	]
)
// CONSTANTS
.constant('LOCALES', {
	'locales': {
		'es_CR': 'Español',
		'en_US': 'English'
	},
	'preferredLocale': 'es_CR'
});

App
	.config(config)
	.run(run);

export default App;
