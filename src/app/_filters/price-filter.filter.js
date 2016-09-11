/**
 * 商品价格过滤器
 */
userTypeFilter.$inject = [];

function userTypeFilter() {
    var filter = function(input) {
        switch (input) {
            case 0: return '黑名单';
            case 1: return '白名单';
            case 2: return '灰名单';
            case 3: return '高风险帐号';
            default: return '出错';
        }
    };

    return filter;
}
