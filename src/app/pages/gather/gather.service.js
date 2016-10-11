/*
 * 数据采集接口配置
 *
 * author: LIUluxi
 */

Gather.$inject = ['Ajax'];

function Gather(Ajax) {

    return {
        getBank: getBank,
        getThird: getThird
    };

    function getBank(vm) {
        return Ajax.doGet('/data/bank?page=' + vm.page + '&pageSize=' + vm.pageSize);
    }

    function getThird(vm) {
        return Ajax.doGet('/data/otherbank?page=' + vm.page + '&pageSize=' + vm.pageSize);
    }
}
