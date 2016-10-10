/*
 * 分析统计接口配置
 *
 * author: LIUluxi
 */

Analysis.$inject = ['Ajax'];

function Analysis(Ajax) {

    return {
        getRule: getRule,
        getTrade: getTrade,
        getWarning: getWarning
    };

    function getRule() {
        return Ajax.doGet('/statistic/rule');
    }

    function getTrade() {
        return Ajax.doGet('/statistic/fraud');
    }

    function getWarning() {
        return Ajax.doGet('/statistic/warning');
    }
}
