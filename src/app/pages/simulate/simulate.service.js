/*
 * 模拟数据接口配置
 *
 * author: LIUluxi
 */

Simulate.$inject = ['Ajax'];

function Simulate(Ajax) {

    return {
        addNormal: addNormal,
        addFraud: addFraud
    };

    function addNormal(vm) {
        return Ajax.doPost(
            '/simulateNormal',
            {
                timeFrom: vm.timeFrom,
                timeTo: vm.timeTo,
                moneyFrom: vm.moneyFrom,
                moneyTo: vm.moneyTo,
                city: vm.city,
                amount: vm.amount,
                channel: vm.channel,
                serviceType: vm.serviceType,
                IP: vm.ip,
                state: vm.state,
                authMode: vm.authMode,
                terminalNumber: vm.terminalNumber
            }
        );
    }

    function addFraud(vm) {
        return Ajax.doPost(
            '/simulateFraud',
            {
                // fraudNumIdFrom: vm.fraudNumIdFrom,
                // fraudNumIdTo1: vm.fraudNumIdTo1,
                // fraudNumIdTo2: vm.fraudNumIdTo2,
                // fraudTimeFrom: vm.fraudTimeFrom,
                // fraudTimeTo: vm.fraudTimeTo,
                // fraudMoneyFrom: vm.fraudMoneyFrom,
                // fraudMoneyTo: vm.fraudMoneyTo,
                // fraudNumCity: vm.fraudNumCity,
                // timeRange: vm.timeRange,
                // timeType: vm.timeType,
                // percent: vm.percent,
                // fraudChannel: vm.fraudChannel,
                // fraudServiceType: vm.fraudServiceType,
                // fraudIp: vm.fraudIp,
                // fraudState: vm.fraudState,
                // fraudAuthMode: vm.fraudAuthMode,
                // fraudTerminalNumber: vm.fraudTerminalNumber
            }
        )
    }
}
