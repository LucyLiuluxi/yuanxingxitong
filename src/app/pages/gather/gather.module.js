/*
 * 数据采集配置
 *
 * author: LIUluxi
 */
angular
    .module('shyh')
    .config(GatherRouter)
    .controller('GatherBankCtrl', GatherBankCtrl)
    .controller('GatherThirdCtrl', GatherThirdCtrl)
    .controller('GatherTableCtrl', GatherTableCtrl)
    .factory('Gather', Gather);
