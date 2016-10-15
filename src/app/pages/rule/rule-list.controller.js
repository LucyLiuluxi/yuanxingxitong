
RuleListCtrl.$inject = ['$rootScope', 'Rule', 'AlertBox'];

function RuleListCtrl($rootScope, Rule, AlertBox) {
    var vm = this;

    vm.addPanelFlag = false;
    vm.ruleList = null;
    vm.ruleId = '';
    vm.ruleName = '';
    vm.type = '';
    vm.safeLevel = '';
    vm.time = '';
    vm.deals = '';
    vm.isCommonFromPlace = '';
    vm.page = 1;
    vm.pageSize = 10;
    vm.total = 0;
    vm.extraConditionList = [];

    vm.refreshRuleList = refreshRuleList;
    vm.submit = submit;
    vm.modify = modify;
    vm.del = del;
    vm.goToDetail = goToDetail;
    vm.addCondition = addCondition;
    vm.deleteCondition = deleteCondition;

    refreshRuleList();

    function refreshRuleList() {
        Rule
            .list(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.ruleList = response.data.list;
                    angular.forEach(vm.ruleList, function(rule) {
                        rule.ruledesc = JSON.parse(rule.ruledesc);
                        rule.ruledesc.isCommonFromPlace = rule.ruledesc.isCommonFromPlace ? 1 : 0;
                    });
                    console.log(vm.ruleList);
                    vm.total = response.data.total;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function submit() {
        if(vm.ruleId) {
            modifyRule();
        } else {
            addRule();
        }
    }

    function modify(rule) {
        vm.addPanelFlag = true;
        vm.ruleId = rule.id;
        vm.ruleName = rule.rulename;
        vm.type = rule.type;
        vm.safeLevel = rule.safeLevel;
        vm.time = rule.ruledesc.time;
        vm.deals = rule.ruledesc.deals;
        vm.isCommonFromPlace = rule.ruledesc.isCommonFromPlace + '';
    }

    function addRule() {
        Rule
            .add(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.addPanelFlag = false;
                    clearForm();
                    AlertBox.success('添加成功');
                    refreshRuleList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function modifyRule() {
        Rule
            .modify(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.addPanelFlag = false;
                    clearForm();
                    AlertBox.success('修改成功');
                    refreshRuleList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function del(id) {
        Rule
            .del(id)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('删除成功');
                    refreshRuleList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function goToDetail(id) {
        $rootScope.$state.go('rule.detail', {ruleId: id});
    }

    function clearForm() {
        vm.ruleId = '';
        vm.ruleName = '';
        vm.type = '';
        vm.safeLevel = '';
        vm.time = '';
        vm.deals = '';
        vm.isCommonFromPlace = '';
    }

    function addCondition() {
        vm.extraConditionList.push({
            attribute: '',
            operator: '',
            threshold: ''
        });
    }

    function deleteCondition(index) {
        vm.extraConditionList.splice(index, 1);
    }
}
