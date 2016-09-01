
angular
    .module('shyh')
    .controller('TopNavBarCtrl', TopNavBarCtrl);

TopNavBarCtrl.$inject = ['$rootScope', 'AlertBox', 'Passport'];

function TopNavBarCtrl($rootScope, AlertBox, Passport) {
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
