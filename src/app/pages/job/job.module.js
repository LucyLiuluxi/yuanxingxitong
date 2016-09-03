/*
 * job管理配置
 *
 * author: LIUluxi
 */
angular
    .module('shyh')
    .config(JobRouter)
    .controller('JobListCtrl', JobListCtrl)
    .controller('JobDetailCtrl', JobDetailCtrl)
    .factory('Job', Job);
