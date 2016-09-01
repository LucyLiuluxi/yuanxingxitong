/*
 * 模型管理接口配置
 *
 * author: LIUluxi
 */

Model.$inject = ['Ajax'];

function Model(Ajax) {

    return {
        list: list,
        add: add,
        getDetail: getDetail,
        del: del
    };

    function list() {
        return Ajax.doGet('/models');
    }

    function add(vm) {
        return Ajax.doPost(
            '/models',
            {
                model: vm.modelName,
                template_id: vm.templateId
            }
        )
    }

    function getDetail(id) {
        return Ajax.doGet(
            '/models',
            {
                modelId: id
            }
        );
    }

    function del(id) {
        return Ajax.doDelete('/models' + id);
    }
}
