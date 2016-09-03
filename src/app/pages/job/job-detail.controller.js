/*
 * job详情控制器
 *
 * author: LIUluxi
 */
JobDetailCtrl.$inject = ['$stateParams', 'Job', 'AlertBox'];

function JobDetailCtrl($stateParams, Job, AlertBox) {
    var vm = this;

    vm.jobId = $stateParams.jobId;
    vm.jobName = '';
    vm.createdAt = '';
    vm.status = '';
    vm.beganAt = '';
    vm.endedAt = '';
    vm.dataset = null;
    vm.model = null;

    init();

    function init() {
        Job
            .getDetail(vm.jobId)
            .success(function(response) {
                if(response.status === 0) {
                    var data = response.data;
                    vm.jobName = data.job;
                    vm.createdAt = data.created_at;
                    vm.status = data.status;
                    vm.beganAt = data.began_at;
                    vm.endedAt = data.ended_at;
                    vm.dataset = data.dataset;
                    vm.model = data.model;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.success(response.msg);
            });
    }
}
