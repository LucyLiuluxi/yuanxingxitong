/*
 * 警报展示路由配置
 *
 * author: LIUluxi
 */
WarningRouter.$inject = ['$stateProvider'];

function WarningRouter($stateProvider) {
    $stateProvider
        .state('warning', {
            url: '/warning',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('warning.list', {
            url: '/list',
            templateUrl: 'views/warning.html',
            controller: 'WarningListCtrl',
            controllerAs: 'warningList',
            data: { pageTitle: '警报展示', specialClass: 'sticky-header' }
        });
}
