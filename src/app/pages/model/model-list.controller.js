/*
 * 模型列表控制器
 *
 * author: LIUluxi
 */
ModelListCtrl.$inject = ['$rootScope', 'Model', 'AlertBox'];

function ModelListCtrl($rootScope, Model, AlertBox) {
    var vm = this;

    vm.modelName = '';
    vm.templateId = '';
    vm.modelList = null;
    vm.addPanelFlag = false;
    vm.page = 1;
    vm.pageSize = 10;
    vm.totalModels = 50;

    vm.submit = submit;
    vm.del = del;
    vm.gotoDetail = gotoDetail;
    vm.refreshModelList = refreshModelList;

    refreshModelList();

    function refreshModelList() {
        Model
            .list()
            .success(function(response) {
                if(response.status === 0) {
                    vm.modelList = response.data;
                } else {
                    AlertBox.error(response.msg);
                }
            });
    }

    function submit() {
        if(vm.modelName === '') {
            AlertBox.error('模型名称不能为空');
            return;
        }
        if(vm.templateId === '') {
            AlertBox.error('请选择模型');
            return;
        }
        Model
            .add(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.modelName = '';
                    vm.templateId = '';
                    vm.addPanelFlag = false;
                    //refreshModelList();
                    vm.modelList.push(response.data);
                } else {
                    AlertBox.error(response.msg);
                }
            });
    }

    function del(modelId) {
        vm.modelList.splice(modelId - 1, 1);
        return;
        Model
            .del(modelId)
            .success(function(response) {
                if(response.status === 0) {
                    refreshModelList();
                } else {
                    AlertBox.error(response.msg);
                }
            });
    }

    function gotoDetail(modelId) {
        $rootScope.$state.go('model.detail', {modelId: modelId});
    }
}
