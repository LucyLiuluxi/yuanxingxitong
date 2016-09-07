
RuleDetailCtrl.$inject = ['$stateParams', 'Rule', 'AlertBox'];

function RuleDetailCtrl($stateParams, Rule, AlertBox) {
    var vm = this;

    vm.ruleId = $stateParams.ruleId;
    vm.ruleName = '';
    vm.frequency = '';
    vm.type = '';
    vm.safeLevel = '';
    vm.ruleFactor = null;

    init();

    function init() {
        Rule
            .getDetail(vm.ruleId)
            .success(function(response) {
                if(response.status === 0) {
                    var result = response.data;
                    vm.ruleName = result.bankRule.rulename;
                    vm.frequency = result.bankRule.frequency;
                    vm.type = result.bankRule.type;
                    vm.safeLevel = result.bankRule.safeLevel;
                    vm.ruleFactor = result.ruleFactor;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }
}
