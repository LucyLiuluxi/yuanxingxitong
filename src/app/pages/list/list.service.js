/*
 * 名单管理接口配置
 *
 * author: LIUluxi
 */

List.$inject = ['Ajax'];

function List(Ajax) {

    return {
        getUserList: getUserList,
        modifyUser: modifyUser,
        getIpList: getIpList,
        modifyIp: modifyIp,
        addIp: addIp,
        deleteIp: deleteIp,
        getPhoneList: getPhoneList,
        modifyPhone: modifyPhone,
        addPhone: addPhone,
        deletePhone: deletePhone
    };

    function getUserList(vm) {
        return Ajax.doPost(
            '/usershow',
            {
                page: vm.page,
                pageSize: vm.pageSize
            }
        );
    }

    function modifyUser(vm) {
        return Ajax.doPost(
            '/usermanage/' + vm.userId,
            {
                id: vm.userId,
                usertype: vm.userType
            }
        );
    }

    function getIpList(vm) {
        return Ajax.doPost(
            '/ipshow',
            {
                page: vm.page,
                pageSize: vm.pageSize
            }
        );
    }

    function modifyIp(vm) {
        return Ajax.doPost(
            '/ipmanage/' + vm.ipId,
            {
                id: vm.ipId,
                safety: vm.safety
            }
        );
    }

    function addIp(vm) {
        return Ajax.doPost(
            '/ipmanage',
            {
                ipdata: vm.ipData,
                safety: vm.safety
            }
        );
    }

    function deleteIp(id) {
        return Ajax.doDelete(
            '/ipmanage/' + id,
            {
                id: id
            }
        );
    }

    function getPhoneList(vm) {
        return Ajax.doPost(
            '/phoneshow',
            {
                page: vm.page,
                pageSize: vm.pageSize
            }
        );
    }

    function modifyPhone(vm) {
        return Ajax.doPost(
            '/phonemanage/' + vm.phoneId,
            {
                id: vm.phoneId,
                safety: vm.safety
            }
        );
    }

    function addPhone(vm) {
        return Ajax.doPost(
            '/phonemanage',
            {
                phonenumber: vm.phone,
                safety: vm.safety
            }
        );
    }

    function deletePhone(id) {
        return Ajax.doDelete(
            '/phonemanage/' + id,
            {
                id: id
            }
        );
    }
}
