/*
 * 模型管理配置
 *
 * author: LIUluxi
 */
angular
    .module('shyh')
    .config(ModelRouter)
    .controller('ModelListCtrl', ModelListCtrl)
    .controller('ModelDetailCtrl', ModelDetailCtrl)
    .factory('Model', Model);
