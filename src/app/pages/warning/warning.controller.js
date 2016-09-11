/*
 * 警报展示控制器
 *
 * author: LIUluxi
 */
WarningListCtrl.$inject = ['Warning', 'AlertBox'];

function WarningListCtrl(Warning, AlertBox) {
    var vm = this;

    vm.warningList = null;
    vm.page = 1;
    vm.pageSize = 20;
    vm.total = 0;
    vm.safety = 0;
    vm.safeAction = 5;

    refreshWarningList();

    function refreshWarningList() {
        Warning
            .list(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.warningList = response.data.list;
                    vm.total = response.data.total;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }
}
