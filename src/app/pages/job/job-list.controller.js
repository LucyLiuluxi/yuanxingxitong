/*
 * job列表控制器
 *
 * author: LIUluxi
 */
JobListCtrl.$inject = ['$rootScope', 'Job', 'AlertBox'];

function JobListCtrl($rootScope, Job, AlertBox) {
    var vm = this;

    vm.modelId = '';
    vm.beganAt = '';
    vm.dataset = {
        began_at: '',
        ended_at: ''
    };
    vm.jobList = null;
    vm.addPanelFlag = false;
    vm.page = 1;
    vm.pageSize = 10;
    vm.total = 50;

    vm.submit = submit;
    vm.gotoDetail = gotoDetail;
    vm.refreshJobList = refreshJobList;

    init();

    function init() {
        initPicker();
        refreshJobList();
    }

    function initPicker() {
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

    function refreshJobList() {
        Job
            .list()
            .success(function(response) {
                if(response.status === 0) {
                    vm.jobList = response.data;
                } else {
                    AlertBox.error(response.msg);
                }
            });
    }

    function submit() {
        vm.beganAt = $('.default-date-picker').val();
        vm.dataset = {
            began_at: $('.dpd1').val(),
            ended_at: $('.dpd2').val()
        };
        vm.dataset = JSON.stringify(vm.dataset);
        Job
            .add(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.modelId = '';
                    vm.beganAt = '';
                    $('.dpd1').val('');
                    $('.dpd2').val('');
                    vm.addPanelFlag = false;
                    refreshJobList();
                } else {
                    AlertBox.error(response.msg);
                }
            });
    }

    function gotoDetail(jobId) {
        $rootScope.$state.go('job.detail', {jobId: jobId});
    }
}
