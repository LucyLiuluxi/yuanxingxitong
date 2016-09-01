/*
 * 模型列表控制器
 *
 * author: LIUluxi
 */
ModelListCtrl.$inject = ['$rootScope', '$http', 'Model', 'AlertBox'];

function ModelListCtrl($rootScope, $http, Model, AlertBox) {
    var vm = this;

    vm.modelName = '';
    vm.templateId = '';
    vm.modelList = null;
    vm.addPanelFlag = false;

    vm.submit = submit;
    vm.del = del;
    vm.gotoDetail = gotoDetail;

    refreshModelList();

    function refreshModelList() {
        /*Model
            .list()
            .success(function(response) {
                if(response.status === 0) {
                    //vm.modelList = response.data;
                    console.log(response);
                } else {
                    AlertBox.error(response.msg);
                }
            });*/
        /*$.get('/ajax/models',function(res) {
            console.log(res);
        });return;*/
        $http({
            method: 'GET',
            url: '/ajax/models',
            transformResponse: function (data, headersGetter, status) {
                //This was implemented since the REST service is returning a plain/text response
                //and angularJS $http module can't parse the response like that.
                data = data.replace(/\s/g, '');
                data = data.toString();
                console.log(data);
                return data;
            }
        }).success(function (res) {
            console.log(typeof res);
            //Some success function
        }).error(function () {
            //Some error function
        });return;
        $http.get('/ajax/models', function(response) {
            var body = '';

            response.on('data', function(chunk) {
                body += chunk;
            });

            response.on('end', function() {
                var data = JSON.parse(body);
                console.log(data);
            });
        })/*.success(function(res) {
            console.log(res);
        })*/;
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
                    refreshModelList();
                } else {
                    AlertBox.error(response.msg);
                }
            });
    }

    function del(modelId) {
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
        $rootScope.state.go('model.detail', {modelId: modelId});
    }
}
