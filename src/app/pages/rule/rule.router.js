
ruleRouter.$inject = ['$stateProvider'];

function ruleRouter($stateProvider) {
    $stateProvider
        .state('rule', {
            abstract: true,
            url: '/rule',
            templateUrl: 'views/_shared/content.html'
        })
        .state('rule.list', {
            url: '/list',
            templateUrl: 'views/rule-list.html',
            controller: 'RuleListCtrl',
            controllerAs: 'ruleList',
            data: { pageTitle: '规则管理', specialClass: 'sticky-header' }
        })
        .state('rule.detail', {
            url: '/detail/{ruleId}',
            templateUrl: 'views/rule-detail.html',
            controller: 'RuleDetailCtrl',
            controllerAs: 'ruleDetail',
            data: { pageTitle: '规则详情', specialClass: 'sticky-header' }
        });
}
