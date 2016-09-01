/**
 * @author zhujian@thinkerx.com
 */

(function() {
    angular.module('shyh', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize',                   // ngSanitize
        'ngCookies',
        // 'ngAnimate',
        //'toaster',
        //'summernote',
        //'AngularPrint',
        'LocalStorageModule'
        ]
    )
    .config(setCookiesProvider)
    /**
     * 全局错误信息
     */
    .constant('QINIU_DOMAIN', '');
    setCookiesProvider.$inject = ['$cookiesProvider'];

    function setCookiesProvider($cookiesProvider) {
        $cookiesProvider.expires = 30 * 60 * 1000;
    }
})();
