/*
 * 模拟数据控制器
 *
 * author: LIUluxi
 */
SimulateCtrl.$inject = ['Simulate', 'AlertBox'];

function SimulateCtrl(Simulate, AlertBox) {
    var vm = this;

    vm.timeFrom = '';
    vm.timeTo = '';
    vm.moneyFrom = '';
    vm.moneyTo = '';
    vm.city = '';
    vm.amount = '';
    vm.channel = "";
    vm.serviceType = "";
    vm.ip = "";
    vm.state = "";
    vm.authMode = "";
    vm.terminalNumber = "";

    vm.addNormalPanelFlag = true;
    vm.addFraudPanelFlag = false;
    vm.addRulePanelFlag = false;

    // vm.fraudNumIdFrom = '';
    // vm.fraudNumIdTo1 = '';
    // vm.fraudNumIdTo2 = '';
    // vm.fraudTimeFrom = '';
    // vm.fraudTimeTo = '';
    // vm.fraudMoneyFrom = '';
    // vm.fraudMoneyTo = '';
    // vm.fraudNumCity = '';
    // vm.timeRange = '';
    // vm.timeType = '';
    // vm.percent = '';
    
    // vm.fraudChannel = null;
    // vm.fraudServiceType = null;
    // vm.fraudIp = null;
    // vm.fraudState = null;
    // vm.fraudAuthMode = null;
    // vm.fraudTerminalNumber = null;

    vm.submitNormal = submitNormal;
 //   vm.submitFraud = submitFraud;
    init();


    function init() {
        initPicker();
    }

    function initPicker() {
        $(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii:ss'});
        $('.default-date-picker').datepicker({
            format: 'yyyy-mm-dd'
        });
        var checkin = $('.dpd1').datepicker({
            format: 'yyyy-mm-dd',
            onRender: function(date) {
                return date.valueOf() < now.valueOf() ? 'disabled' : '';
            }
        }).on('changeDate', function(ev) {
            if (ev.date.valueOf() > checkout.date.valueOf()) {
                var newDate = new Date(ev.date);
                newDate.setDate(newDate.getDate() + 1);
                checkout.setValue(newDate);
            }
            checkin.hide();
            $('.dpd2')[0].focus();
        }).data('datepicker');
        var checkout = $('.dpd2').datepicker({
            format: 'yyyy-mm-dd',
            onRender: function(date) {
                return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
            }
        }).on('changeDate', function(ev) {
            checkout.hide();
        }).data('datepicker');
    }
    
    function submitNormal() {console.log(vm);
        Simulate
            .addNormal(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    // function submitFraud() {console.log(vm);
    //     Simulate
    //         .addFraud(vm)
    //         .success(function(response) {
    //             if(response.status === 0) {
    //                 AlertBox.success('添加成功');
    //             }
    //         })
    //         .error(function(response) {
    //             AlertBox.error(response.msg);
    //         });
    // }
}
