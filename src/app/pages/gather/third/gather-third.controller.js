/*
 * 数据采集－第三方数据控制器
 *
 * author: LIUluxi
 */
GatherThirdCtrl.$inject = ['Gather', 'AlertBox'];

function GatherThirdCtrl(Gather, AlertBox) {
    var vm = this;

    vm.dataList = null;
    vm.page = 1;
    vm.pageSize = 20;
    vm.total = 0;

    vm.refreshDataList = refreshDataList;

    refreshDataList();

    function refreshDataList() {
        Gather
            .getThird(vm)
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
