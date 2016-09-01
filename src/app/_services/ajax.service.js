
Ajax.$inject = ['$rootScope', '$http'];

function Ajax($rootScope, $http) {

    var prefix = '/ajax';

    return {
        doPost: doPost,
        doGet: doGet,
        doDelete: doDelete
    };

    function doPost(url, jsonParams) {
        return $http
            .post(
                prefix + url,
                _param(jsonParams),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }
            )
            .success(function(response) {
                if(response.status === 1001) {
                    $rootScope.$state.go('passport.login');
                }
            });
    }

    function doGet(url, jsonParams) {
        return $http
            .get(
                prefix + url,
                {
                    params: jsonParams,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }
            );
    }

    function doDelete(url) {
        return $http
            .delete(
            prefix + url,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }
        );
    }

    function _param(jsonParams) {
        var str = [];
        for (var key in jsonParams) {
            str.push(encodeURIComponent(key) + '=' + encodeURIComponent(jsonParams[key]));
        }

        return str.join('&');
    }
}
