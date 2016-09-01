/*
 * 模型管理路由配置
 *
 * author: LIUluxi
 */
ModelRouter.$inject = ['$stateProvider'];

function ModelRouter($stateProvider) {
    $stateProvider
        .state('model', {
            url: '/model',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('model.list', {
            url: '/list',
            templateUrl: 'views/model-list.html',
            controller: 'ModelListCtrl',
            controllerAs: 'modelList',
            data: { pageTitle: '模型列表', specialClass: 'sticky-header' }
        })
        .state('model.detail', {
            url: '/detail/{modelId}',
            templateUrl: 'views/model-detail.html',
            controller: 'ModelDetailCtrl',
            controllerAs: 'modelDetail',
            data: { pageTitle: '模型列表', specialClass: 'sticky-header' }
        });
}
