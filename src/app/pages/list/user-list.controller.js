/*
 * 用户名单列表控制器
 *
 * author: LIUluxi
 */
UserListCtrl.$inject = ['List', 'AlertBox'];

function UserListCtrl(List, AlertBox) {
    var vm = this;

    vm.addPanelFlag = false;
    vm.total = 0;
    vm.page = 1;
    vm.pageSize = 10;
    vm.userId = '';
    vm.name = '';
    vm.userType = '';
    vm.userList = null;

    vm.refreshUserList = refreshUserList;
    vm.modify = modify;
    vm.submit = submit;

    refreshUserList();

    function refreshUserList() {
        List
            .getUserList(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.userList = response.data.list;
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
        if(vm.userType == '') {
            AlertBox.error('请选择用户类型');
            return;
        }
        List
            .modifyUser(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                    clearPanel();
                    refreshUserList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function modify(user) {
        vm.addPanelFlag = true;
        vm.userId = user.id;
        vm.name = user.username;
        vm.userType = user.usertype + '';
    }

    function clearPanel() {
        vm.addPanelFlag = false;
        vm.userId = '';
        vm.name = '';
        vm.userType = '';
    }
}
