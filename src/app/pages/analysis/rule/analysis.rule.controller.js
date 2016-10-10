/*
 * 规则触发统计控制器
 *
 * author: LIUluxi
 */
AnalysisRuleCtrl.$inject = ['Analysis', 'AlertBox'];

function AnalysisRuleCtrl(Analysis, AlertBox) {
    var vm = this;

    vm.ruleList = null;

    init();

    function init() {
        Analysis
            .getRule()
            .success(function(response) {
                if(response.status === 0) {
                    vm.ruleList = response.data.rules;
                    var business = response.data.businessDistribute;
                    var total = business.sjyh + business.dhyh + business.wsyh + business.wxyh;
                    Morris.Donut({
                        element: 'graph-donut',
                        data: [
                            {value: business.sjyh, label: '手机银行', formatted: (business.sjyh / total * 100).toFixed(2) + '%' },
                            {value: business.dhyh, label: '电话银行', formatted: (business.dhyh / total * 100).toFixed(2) + '%' },
                            {value: business.wsyh, label: '网上银行', formatted: (business.wsyh / total * 100).toFixed(2) + '%' },
                            {value: business.wxyh, label: '微信银行', formatted: (business.wxyh / total * 100).toFixed(2) + '%' }
                        ],
                        backgroundColor: false,
                        labelColor: '#666',
                        colors: [
                            '#4acacb','#6a8bc0','#5ab6df','#fe8676'
                        ],
                        formatter: function (x, data) { return data.formatted; }
                    });
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }
}
