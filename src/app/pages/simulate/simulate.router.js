/*
 * 模拟管理路由配置
 *
 * author: LIUluxi
 */
SimulateRouter.$inject = ['$stateProvider'];

function SimulateRouter($stateProvider) {
    $stateProvider
        .state('simulate', {
            url: '/simulate',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('simulate.add', {
            url: '/add',
            templateUrl: 'views/simulate.html',
            controller: 'SimulateCtrl',
            controllerAs: 'simulate',
            data: { pageTitle: '数据模拟', specialClass: 'sticky-header' }
        });
}
