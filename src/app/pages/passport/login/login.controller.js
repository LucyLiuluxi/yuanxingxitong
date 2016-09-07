
LoginCtrl.$inject = ['$rootScope', 'Passport', 'AlertBox'];

function LoginCtrl($rootScope, Passport, AlertBox) {
    var vm = this;

    vm.username = '';
    vm.password = '';

    vm.submit = submit;

    /**
     * 提交登录表单
     */
    function submit() {
        Passport
            .login(vm)
            .success(function(response) {
                if(response.status === 0) {
                    $rootScope.$state.go('rule.list');
                } else {
                    AlertBox.error(response.msg);
                }
            });
    }
}
