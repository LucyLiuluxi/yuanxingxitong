/*
* 登陆注册路由配置
*
* author: LIUluxi
*/
passportRouter.$inject = ['$stateProvider'];

function passportRouter($stateProvider) {
    $stateProvider
        .state('passport', {
            abstract: true,
            url: '/passport',
            template: '<div ui-view></div>'
        })
        .state('passport.login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login',
            data: { pageTitle: '登录', specialClass: 'login-body' }
        });
}
