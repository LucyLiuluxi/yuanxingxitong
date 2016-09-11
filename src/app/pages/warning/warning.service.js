/*
 * 警报展示接口配置
 *
 * author: LIUluxi
 */

Warning.$inject = ['Ajax'];

function Warning(Ajax) {

    return {
        list: list
    };

    function list(vm) {
        return Ajax.doPost(
            '/datashow',
            {
                page: vm.page,
                pageSize: vm.pageSize,
                safety: vm.safety,
                safe_action: vm.safeAction,
                moneyint: 0
            }
        );
    }
}
