
angular
    .module('shyh')
    .directive('landingScrollspy', landingScrollspy);

function landingScrollspy() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.scrollspy({
                target: '.navbar-fixed-top',
                offset: 80
            });
        }
    };
}
