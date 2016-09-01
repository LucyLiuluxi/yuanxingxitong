
angular
    .module('shyh')
    .directive('pageTitle', pageTitle);

function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = '上海银行 ｜ 交易监控平台';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = '上海银行 | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    };
}
