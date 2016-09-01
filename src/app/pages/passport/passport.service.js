
Passport.$inject = ['Ajax'];

function Passport(Ajax) {

    return {
        login: login,
        logout: logout
    };

    function login(vm) {
        return Ajax.doPost(
            '/login',
            {
                username: vm.username,
                password: vm.password
            }
        );
    }

    function logout() {
        return Ajax.doGet(
            '/logout',
            {}
        );
    }
}
