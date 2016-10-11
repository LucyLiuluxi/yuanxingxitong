/**
 * 第三方来源过滤器
 */
fromBankFilter.$inject = [];

function fromBankFilter() {
    var filter = function(input) {
        switch (input) {
            case 1: return '支付宝';
            case 2: return '微信';
            case 3: return '淘宝';
            case 4: return '京东';
            default: return '出错';
        }
    };

    return filter;
}
