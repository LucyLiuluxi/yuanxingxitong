/*
 * 交易检测控制器
 *
 * author: LIUluxi
 */
DetectCtrl.$inject = ['$scope', 'Detect', 'AlertBox'];

function DetectCtrl($scope, Detect, AlertBox) {
    var vm = this;

    vm.fraudList = [];

    vm.showInPage = showInPage;
    vm.importExcel = importExcel;

    $scope.uploadImage = function() {
        $('.detect-model').show();
    };

    function showInPage() {
        $('.detect-model').hide();
        Detect
            .detectTrade()
            .success(function(response) {
                if(response.status == 0) {
                    vm.fraudList = response.data;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function importExcel() {
        $('.detect-model').hide();
    }
}
