
ruleRouter.$inject = ['$stateProvider'];

function ruleRouter($stateProvider) {
    $stateProvider
        .state('rule', {
            abstract: true,
            url: '/rule',
            templateUrl: 'views/_shared/content.html',
            resolve: {
                loadPlugin: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        /*{
                            serie: true,
                            files: [
                                'vendor/plupload/js/plupload.full.min.js',
                                'vendor/qiniu-js-sdk/dist/qiniu.min.js'
                            ]
                        }*/
                    ]);
                }]
            }
        })
        .state('rule.manage', {
            url: '/manage',
            templateUrl: 'views/rule.html',
            controller: 'RuleCtrl',
            controllerAs: 'rule',
            data: { pageTitle: '规则管理', specialClass: 'sticky-header' }
        });
}
