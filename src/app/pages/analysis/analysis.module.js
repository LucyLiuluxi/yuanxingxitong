/*
 * 分析统计配置
 *
 * author: LIUluxi
 */
angular
    .module('shyh')
    .config(AnalysisRouter)
    .controller('AnalysisRuleCtrl', AnalysisRuleCtrl)
    .controller('AnalysisTradeCtrl', AnalysisTradeCtrl)
    .controller('AnalysisWarningCtrl', AnalysisWarningCtrl)
    .factory('Analysis', Analysis);
