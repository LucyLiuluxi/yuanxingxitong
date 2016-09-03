/*
 * 模型详情控制器
 *
 * author: LIUluxi
 */
ModelDetailCtrl.$inject = ['$stateParams', 'Model', 'AlertBox'];

function ModelDetailCtrl($stateParams, Model, AlertBox) {
    var vm = this;

    vm.modelId = $stateParams.modelId;
    vm.modelName = '';
    vm.createdAt = '';
    vm.status = '';
    vm.templateName = '';
    vm.parameters = null;
    vm.trainingHistory = null;

    init();

    function init() {
        Model
            .getDetail(vm.modelId)
            .success(function(response) {
                if(response.status === 0) {
                    var data = response.data;
                    vm.modelName = data.model;
                    vm.createdAt = data.created_at;
                    vm.status = data.status;
                    vm.templateName = data.template_name;
                    vm.parameters = data.parameters;
                    vm.trainingHistory = data.training_history;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.success(response.msg);
            });
    }
}
