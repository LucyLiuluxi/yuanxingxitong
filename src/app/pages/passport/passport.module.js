
angular
    .module('shyh')
    .config(passportRouter)
    .controller('LoginCtrl', LoginCtrl)
    .factory('Passport', Passport);
