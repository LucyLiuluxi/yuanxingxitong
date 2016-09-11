/*
 * 名单管理路由配置
 *
 * author: LIUluxi
 */
ListRouter.$inject = ['$stateProvider'];

function ListRouter($stateProvider) {
    $stateProvider
        .state('list', {
            url: '/list',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('list.user', {
            url: '/user',
            templateUrl: 'views/user-list.html',
            controller: 'UserListCtrl',
            controllerAs: 'userList',
            data: { pageTitle: '用户名单列表', specialClass: 'sticky-header' }
        })
        .state('list.ip', {
            url: '/ip',
            templateUrl: 'views/ip-list.html',
            controller: 'IpListCtrl',
            controllerAs: 'ipList',
            data: { pageTitle: 'IP地址名单列表', specialClass: 'sticky-header' }
        })
        .state('list.phone', {
            url: '/phone',
            templateUrl: 'views/phone-list.html',
            controller: 'PhoneListCtrl',
            controllerAs: 'phoneList',
            data: { pageTitle: '手机名单列表', specialClass: 'sticky-header' }
        });
}
