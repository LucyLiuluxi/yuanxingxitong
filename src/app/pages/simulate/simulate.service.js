/*
 * 模拟数据接口配置
 *
 * author: LIUluxi
 */

Simulate.$inject = ['Ajax'];

function Simulate(Ajax) {

    return {
        add: add
    };

    function add(vm) {
        return Ajax.doPost(
            '/models',
            {
                name: vm.name
            }
        )
    }
}
