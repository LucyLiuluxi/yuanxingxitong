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
            '/simulateNormal',
            {
                timeFrom: vm.timeFrom,
                timeTo: vm.timeTo,
                moneyFrom: vm.moneyFrom,
                moneyTo: vm.moneyTo,
                city: vm.city,
                amount: vm.amount
                //name: vm.name
            }
        )
    }
}
