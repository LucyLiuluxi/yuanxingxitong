/*
 * 电话名单列表控制器
 *
 * author: LIUluxi
 */
PhoneListCtrl.$inject = ['List', 'AlertBox'];

function PhoneListCtrl(List, AlertBox) {
    var vm = this;

    vm.addPanelFlag = false;
    vm.total = 0;
    vm.page = 1;
    vm.pageSize = 10;
    vm.phoneId = '';
    vm.phone = '';
    vm.safety = '';
    vm.phoneList = null;

    vm.refreshPhoneList = refreshPhoneList;
    vm.submit = submit;
    vm.deletePhone = deletePhone;
    vm.modify = modify;

    refreshPhoneList();

    function refreshPhoneList() {
        List
            .getPhoneList(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.phoneList = response.data.list;
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
        if(vm.phoneId == '') {
            addPhone();
        } else {
            modifyPhone();
        }
    }

    function addPhone() {
        List
            .addPhone(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                    clearPanel();
                    refreshPhoneList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function modifyPhone() {
        List
            .modifyPhone(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                    clearPanel();
                    refreshPhoneList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function modify(phone) {
        vm.addPanelFlag = true;
        vm.phoneId = phone.id;
        vm.phone = phone.phoneNumber;
        vm.safety = phone.safety;
    }

    function deletePhone(id) {
        List
            .deletePhone(id)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('删除成功');
                    refreshPhoneList();
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
        vm.phoneId = '';
        vm.phone = '';
        vm.safety = '';
    }
}
