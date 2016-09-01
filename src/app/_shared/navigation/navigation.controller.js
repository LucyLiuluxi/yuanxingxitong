
NavigationCtrl.$inject = ['$rootScope', 'Passport', 'AlertBox'];

function NavigationCtrl($rootScope, Passport, AlertBox) {
    var vm = this;

    vm.logout = logout;

    function logout() {
        Passport
            .logout()
            .success(function(response) {
                if(response.status === 0) {
                    $rootScope.$state.go('passport.login');
                } else {
                    AlertBox.error(error.msg);
                }
            })
            .error(function(error) {
                AlertBox.error(error.msg);
            });
    }
}
