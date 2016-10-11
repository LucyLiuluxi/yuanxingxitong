/*
 * 概览路由配置
 *
 * author: LIUluxi
 */
PreviewRouter.$inject = ['$stateProvider'];

function PreviewRouter($stateProvider) {
    $stateProvider
        .state('preview', {
            url: '/preview',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('preview.home', {
            url: '/',
            templateUrl: 'views/preview.html',
            controller: 'PreviewCtrl',
            controllerAs: 'preview',
            data: { pageTitle: '概览', specialClass: 'sticky-header' }
        });
}
