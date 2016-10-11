/*
 * 数据采集路由配置
 *
 * author: LIUluxi
 */
GatherRouter.$inject = ['$stateProvider'];

function GatherRouter($stateProvider) {
    $stateProvider
        .state('gather', {
            url: '/gather',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('gather.bank', {
            url: '/bank',
            templateUrl: 'views/gather-bank.html',
            controller: 'GatherBankCtrl',
            controllerAs: 'gatherBank',
            data: { pageTitle: '数据采集 ｜ 银行业务数据', specialClass: 'sticky-header' }
        })
        .state('gather.third', {
            url: '/third',
            templateUrl: 'views/gather-third.html',
            controller: 'GatherThirdCtrl',
            controllerAs: 'gatherThird',
            data: { pageTitle: '数据采集 ｜ 第三方数据', specialClass: 'sticky-header' }
        });
}
