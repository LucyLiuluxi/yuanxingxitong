/*
 * 数据采集－业务数据表控制器
 *
 * author: LIUluxi
 */
GatherTableCtrl.$inject = [];

function GatherTableCtrl() {
    var vm = this;

    vm.tableList = [{
        name: 'cash_business',
        detail: '现金业务'
    }, {
        name: 'transfer_business',
        detail: '转账业务'
    }, {
        name: 'currency_exchange_business',
        detail: '汇兑业务'
    }, {
        name: 'bank_drafts',
        detail: '银行汇票业务'
    }, {
        name: 'deposit_sys',
        detail: '存款系统'
    }, {
        name: 'loans_sys',
        detail: '贷款系统'
    }, {
        name: 'trade_finance_sys',
        detail: '贸易融资系统'
    }, {
        name: 'central_liability_sys',
        detail: '中心债务系统'
    }, {
        name: 'factoring_business',
        detail: '保理业务'
    }, {
        name: 'finance_business',
        detail: '融资业务'
    }];
}
