/*
 * 数据采集－银行业务数据控制器
 *
 * author: LIUluxi
 */
GatherBankCtrl.$inject = ['Gather', 'AlertBox'];

function GatherBankCtrl(Gather, AlertBox) {
    var vm = this;

    vm.dataList = null;
    vm.page = 1;
    vm.pageSize = 20;
    vm.total = 0;

    vm.refreshDataList = refreshDataList;

    refreshDataList();

    function refreshDataList() {
        Gather
            .getBank(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.total = response.data.total;
                    vm.dataList = response.data.list;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            })
    }
}
