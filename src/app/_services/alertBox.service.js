
AlertBox.$inject = ['$timeout'];

function AlertBox($timeout) {

    return {
        success: success,
        error: error
    };

    function success(msg) {
        $('.J_success').show().find('span').text(msg);
        $timeout(function() {
            $('.J_success').hide();
        }, 2000);
    }

    function error(msg) {
        $('.alert').show().find('span').text(msg);
        $timeout(function() {
            $('.alert').hide();
        }, 2000);
    }
}
