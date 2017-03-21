function config($logProvider, $mdThemingProvider, $translateProvider, LOCALES) {
	'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  // Do themes stuff
	$mdThemingProvider.theme('default')
	.primaryPalette('blue')
	.accentPalette('light-blue')
	.warnPalette('pink');

	//console.log(LOCALES.preferredLocale);

  $translateProvider
  	.useLocalStorage()
	  .useStaticFilesLoader({
	    prefix: 'assets/data/locale-',
	    suffix: '.json'
	  })
    .fallbackLanguage('en_US')
    //.useSanitizeValueStrategy('sanitize')
    .preferredLanguage(LOCALES.preferredLocale);
    //.determinePreferredLanguage();

  //console.log($translateProvider.determinePreferredLanguage());

  //tmhDynamicLocaleProvider.localeLocationPattern('/assets/data/locale-{{locale}}.json');

}

export default config;
