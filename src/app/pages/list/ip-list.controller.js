/*
 * IP名单列表控制器
 *
 * author: LIUluxi
 */
IpListCtrl.$inject = ['List', 'AlertBox'];

function IpListCtrl(List, AlertBox) {
    var vm = this;

    vm.addPanelFlag = false;
    vm.total = 0;
    vm.page = 1;
    vm.pageSize = 10;
    vm.ipId = '';
    vm.ipData = '';
    vm.safety = '';
    vm.ipList = null;

    vm.refreshIpList = refreshIpList;
    vm.submit = submit;
    vm.deleteIp = deleteIp;
    vm.modify = modify;

    refreshIpList();

    function refreshIpList() {
        List
            .getIpList(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.ipList = response.data.list;
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
        if(vm.ipId == '') {
            addIp();
        } else {
            modifyIp();
        }
    }

    function addIp() {
        List
            .addIp(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                    clearPanel();
                    refreshIpList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function modifyIp() {
        List
            .modifyIp(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                    clearPanel();
                    refreshIpList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function modify(ip) {
        vm.addPanelFlag = true;
        vm.ipId = ip.id;
        vm.ipData = ip.ip;
        vm.safety = ip.safety;
    }

    function deleteIp(id) {
        List
            .deleteIp(id)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('删除成功');
                    refreshIpList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function clearPanel() {
        vm.addPanelFlag = false;
        vm.ipData = '';
        vm.safety = '';
        vm.ipId = '';
    }
}
