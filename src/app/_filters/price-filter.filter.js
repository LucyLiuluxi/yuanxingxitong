/**
 * 商品价格过滤器
 */
priceFilter.$inject = [];

function priceFilter() {
    var pFilter = function(input) {
        if(input === null || input === '' || typeof input === 'undefined' || input < 0) {
            return '¥0.00';
        } else {
            return '¥' + parseFloat(input).toFixed(2);
        }
    };

    return pFilter;
}
