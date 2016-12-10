/*
 * 交易检测接口配置
 *
 * author: LIUluxi
 */

Detect.$inject = ['Ajax'];

function Detect(Ajax) {

    return {
        detectTrade: detectTrade
    };

    function detectTrade() {
        return Ajax.doPost(
            '/check/importdata',
            {}
        );
    }
}
