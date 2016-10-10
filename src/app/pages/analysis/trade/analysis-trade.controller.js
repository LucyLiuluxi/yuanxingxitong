/*
 * 规则触发统计控制器
 *
 * author: LIUluxi
 */
AnalysisTradeCtrl.$inject = ['Analysis', 'AlertBox'];

function AnalysisTradeCtrl(Analysis, AlertBox) {
    var vm = this;

    vm.ruleList = null;

    init();

    function init() {
        Analysis
            .getTrade()
            .success(function(response) {
                if(response.status === 0) {
                    vm.ruleList = response.data.data;
                    drawBusinessDonut(response.data.businessDistribute);
                    drawDistrictDonut(response.data.areaDistribute);
                    drawMoneyDonut(response.data.moneyDistribute);
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function drawBusinessDonut(business) {
        var total = business.sjyh + business.dhyh + business.wsyh + business.wxyh;
        Morris.Donut({
            element: 'business-donut',
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
    }

    function drawDistrictDonut(district) {
        var total = district.beijing + district.guizhou + district.fujian + district.shanghai + district.guangdong + district.others;
        Morris.Donut({
            element: 'district-donut',
            data: [
                {value: district.fujian, label: '福建省', formatted: (district.fujian / total * 100).toFixed(2) + '%' },
                {value: district.shanghai, label: '上海市', formatted: (district.shanghai / total * 100).toFixed(2) + '%' },
                {value: district.guangdong, label: '广东省', formatted: (district.guangdong / total * 100).toFixed(2) + '%' },
                {value: district.beijing, label: '北京市', formatted: (district.beijing / total * 100).toFixed(2) + '%' },
                {value: district.guizhou, label: '贵州省', formatted: (district.guizhou / total * 100).toFixed(2) + '%' },
                {value: district.others, label: '其他', formatted: (district.others / total * 100).toFixed(2) + '%' }
            ],
            backgroundColor: false,
            labelColor: '#666',
            colors: [
                '#4acacb','#6a8bc0','#5ab6df','#fe8676','#f0ad4e','#6dc5a3'
            ],
            formatter: function (x, data) { return data.formatted; }
        });
    }

    function drawMoneyDonut(money) {
        var total = money.m0 + money.m1 + money.m2 + money.m3 + money.m4;
        Morris.Donut({
            element: 'money-donut',
            data: [
                {value: money.m1, label: '5000-10000元', formatted: (money.m1 / total * 100).toFixed(2) + '%' },
                {value: money.m2, label: '10000-25000元', formatted: (money.m2 / total * 100).toFixed(2) + '%' },
                {value: money.m0, label: '0-5000元', formatted: (money.m0 / total * 100).toFixed(2) + '%' },
                {value: money.m3, label: '25000-50000元', formatted: (money.m3 / total * 100).toFixed(2) + '%' },
                {value: money.m4, label: '50000元以上', formatted: (money.m4 / total * 100).toFixed(2) + '%' }
            ],
            backgroundColor: false,
            labelColor: '#666',
            colors: [
                '#4acacb','#6a8bc0','#5ab6df','#fe8676','#f0ad4e'
            ],
            formatter: function (x, data) { return data.formatted; }
        });
    }
}
