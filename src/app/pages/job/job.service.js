/*
 * 模型管理接口配置
 *
 * author: LIUluxi
 */

Job.$inject = ['Ajax'];

function Job(Ajax) {

    return {
        list: list,
        add: add,
        getDetail: getDetail
    };

    function list() {
        return Ajax.doGet('/models/jobs');
    }

    function add(vm) {
        return Ajax.doPost(
            '/models/jobs',
            {
                model_id: vm.modelId,
                began_at: vm.beganAt,
                dataset: vm.dataset
            }
        )
    }

    function getDetail(id) {
        return Ajax.doGet('/models/jobs/' + id);
    }
}
