
Rule.$inject = ['Ajax'];

function Rule(Ajax) {

    return {
        list: list,
        add: add,
        getDetail: getDetail,
        modify: modify,
        del: del
    };

    function list(vm) {
        return Ajax.doGet('/rules?page=' + vm.page + '&pageSize=' + vm.pageSize);
    }

    function add(vm) {
        return Ajax.doPost(
            '/rules',
            {
                rulename: vm.ruleName,
                type: vm.type,
                safeLevel: vm.safeLevel,
                time: vm.time,
                deals: vm.deals,
                isCommonFromPlace: vm.isCommonFromPlace ? true : false
            }
        )
    }

    function getDetail(id) {
        return Ajax.doGet('/rules/' + id);
    }

    function modify(vm) {
        return Ajax.doPost(
            '/rules/' + vm.ruleId,
            {
                id: vm.ruleId,
                rulename: vm.ruleName,
                type: vm.type,
                safeLevel: vm.safeLevel,
                time: vm.time,
                deals: vm.deals,
                isCommonFromPlace: vm.isCommonFromPlace ? true : false
            }
        )
    }

    function del(id) {
        return Ajax.doDelete('/rules/' + id);
    }
}
