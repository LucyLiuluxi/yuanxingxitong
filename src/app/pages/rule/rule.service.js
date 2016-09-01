
Rule.$inject = ['Ajax'];

function Rule(Ajax) {

    return {
        list: list
    };

    function list(vm) {
        return Ajax.doPost(
            '/seller/book/list',
            {
                page: vm.page,
                pageSize: vm.pageSize
            }
        );
    }
}
