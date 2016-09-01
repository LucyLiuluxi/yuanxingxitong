/*
 * 模拟数据控制器
 *
 * author: LIUluxi
 */
SimulateCtrl.$inject = ['Simulate', 'AlertBox'];

function SimulateCtrl(Simulate, AlertBox) {
    var vm = this;

    vm.name = '';

    vm.submit = submit;

    function submit() {
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
