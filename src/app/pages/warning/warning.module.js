/*
 * 警报展示配置
 *
 * author: LIUluxi
 */
angular
    .module('shyh')
    .config(WarningRouter)
    .controller('WarningListCtrl', WarningListCtrl)
    .factory('Warning', Warning);
