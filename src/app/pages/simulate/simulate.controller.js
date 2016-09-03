/*
 * 模拟数据控制器
 *
 * author: LIUluxi
 */
SimulateCtrl.$inject = ['Simulate', 'AlertBox'];

function SimulateCtrl(Simulate, AlertBox) {
    var vm = this;

    vm.timeFrom = '';
    vm.timeTo = '';
    vm.moneyFrom = '';
    vm.moneyTo = '';
    vm.city = '';
    vm.amount = '';

    vm.submitnormal = submit;

    function submit() {console.log(vm);
        Simulate
            .add(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }
}
