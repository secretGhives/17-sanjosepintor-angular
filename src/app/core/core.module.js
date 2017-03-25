const shared = angular.module('core.shared', []);


import * as beforeAfterDirective from './directives/before-after/before-after.directive';
import * as affixTopDirective from './directives/affix-top/affix-top.directive';
import * as zoomDirective from './directives/zoom/zoom.directive';
import * as scrollOnClickDirective from './directives/scroll-on-click/scroll-on-click.directive';
import * as translateLanguageSelectDirective from './directives/translate-language-select/translate-language-select.directive';
// Add directive imports above

import * as storeFactory from './services/store/store.factory';
import * as localeFactory from './services/locale/locale.factory';
// Add service imports above

shared.directive('beforeAfter', beforeAfterDirective);
shared.directive('affixTop', affixTopDirective);
shared.directive('zoom', zoomDirective);
shared.directive('scrollOnClick', scrollOnClickDirective);
shared.directive('translateLanguageSelect', translateLanguageSelectDirective);
// Add directive to module above

shared.factory('store', storeFactory);
shared.factory('localeFactory', localeFactory);
// Add service to module above

export default shared;
