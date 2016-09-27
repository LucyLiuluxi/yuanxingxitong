/*
 * 分析统计路由配置
 *
 * author: LIUluxi
 */
AnalysisRouter.$inject = ['$stateProvider'];

function AnalysisRouter($stateProvider) {
    $stateProvider
        .state('analysis', {
            url: '/analysis',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('analysis.rule', {
            url: '/rule',
            templateUrl: 'views/analysis-rule.html',
            controller: 'AnalysisRuleCtrl',
            controllerAs: 'analysisRule',
            data: { pageTitle: '规则触发情况统计', specialClass: 'sticky-header' }
        })
        .state('analysis.trade', {
            url: '/trade',
            templateUrl: 'views/analysis-trade.html',
            controller: 'AnalysisTradeCtrl',
            controllerAs: 'analysisTrade',
            data: { pageTitle: '欺诈交易统计', specialClass: 'sticky-header' }
        })
        .state('analysis.warning', {
            url: '/warning',
            templateUrl: 'views/analysis-warning.html',
            controller: 'AnalysisWarningCtrl',
            controllerAs: 'analysisWarning',
            data: { pageTitle: '可疑警报统计', specialClass: 'sticky-header' }
        });
}
