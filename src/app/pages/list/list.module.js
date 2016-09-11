/*
 * 名单管理配置
 *
 * author: LIUluxi
 */
angular
    .module('shyh')
    .config(ListRouter)
    .controller('UserListCtrl', UserListCtrl)
    .controller('IpListCtrl', IpListCtrl)
    .controller('PhoneListCtrl', PhoneListCtrl)
    .factory('List', List);
