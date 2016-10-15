/*
 * 警报统计控制器
 *
 * author: LIUluxi
 */
AnalysisWarningCtrl.$inject = ['Analysis', 'AlertBox'];

function AnalysisWarningCtrl(Analysis, AlertBox) {
    var vm = this;

    vm.ruleList = null;

    init();

    function init() {
        //drawMap();
        Analysis
            .getTrade()
            .success(function(response) {
                if(response.status === 0) {
                    vm.ruleList = response.data.data;
                    /*drawBusinessDonut(response.data.businessDistribute);
                    drawDistrictDonut(response.data.areaDistribute);
                    drawMoneyDonut(response.data.moneyDistribute);*/
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

    function drawMap() {
        var dom = document.getElementById("map-container");
        var myChart = echarts.init(dom);
        option = null;

        function randomData() {
            return Math.round(Math.random()*1000);
        }

        option = {
            title: {
                text: 'iphone销量',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: 'iphone3',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '重庆',value: randomData() },
                        {name: '河北',value: randomData() },
                        {name: '河南',value: randomData() },
                        {name: '云南',value: randomData() },
                        {name: '辽宁',value: randomData() },
                        {name: '黑龙江',value: randomData() },
                        {name: '湖南',value: randomData() },
                        {name: '安徽',value: randomData() },
                        {name: '山东',value: randomData() },
                        {name: '新疆',value: randomData() },
                        {name: '江苏',value: randomData() },
                        {name: '浙江',value: randomData() },
                        {name: '江西',value: randomData() },
                        {name: '湖北',value: randomData() },
                        {name: '广西',value: randomData() },
                        {name: '甘肃',value: randomData() },
                        {name: '山西',value: randomData() },
                        {name: '内蒙古',value: randomData() },
                        {name: '陕西',value: randomData() },
                        {name: '吉林',value: randomData() },
                        {name: '福建',value: randomData() },
                        {name: '贵州',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '青海',value: randomData() },
                        {name: '西藏',value: randomData() },
                        {name: '四川',value: randomData() },
                        {name: '宁夏',value: randomData() },
                        {name: '海南',value: randomData() },
                        {name: '台湾',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                },
                {
                    name: 'iphone4',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '重庆',value: randomData() },
                        {name: '河北',value: randomData() },
                        {name: '安徽',value: randomData() },
                        {name: '新疆',value: randomData() },
                        {name: '浙江',value: randomData() },
                        {name: '江西',value: randomData() },
                        {name: '山西',value: randomData() },
                        {name: '内蒙古',value: randomData() },
                        {name: '吉林',value: randomData() },
                        {name: '福建',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '西藏',value: randomData() },
                        {name: '四川',value: randomData() },
                        {name: '宁夏',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                },
                {
                    name: 'iphone5',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '台湾',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                }
            ]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
}
