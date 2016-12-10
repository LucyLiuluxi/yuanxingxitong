/*
 * 交易检测路由配置
 *
 * author: LIUluxi
 */
DetectRouter.$inject = ['$stateProvider'];

function DetectRouter($stateProvider) {
    $stateProvider
        .state('detect', {
            url: '/detect',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('detect.detect', {
            url: '/',
            templateUrl: 'views/detect.html',
            controller: 'DetectCtrl',
            controllerAs: 'detect',
            data: { pageTitle: '交易检测', specialClass: 'sticky-header' }
        });
}
