angular
    .module('shyh')
    .config(mainConfig);

mainConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider'];

function mainConfig($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('shyh')
        .setStorageType('sessionStorage');

    $urlRouterProvider.otherwise("/passport/login");
}

angular
    .module('shyh')
    .run(['$rootScope', '$state', function($rootScope, $state) {
        $rootScope.$state = $state;
    }]);
