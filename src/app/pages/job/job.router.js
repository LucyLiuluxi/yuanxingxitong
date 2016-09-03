/*
 * job管理路由配置
 *
 * author: LIUluxi
 */
JobRouter.$inject = ['$stateProvider'];

function JobRouter($stateProvider) {
    $stateProvider
        .state('job', {
            url: '/job',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('job.list', {
            url: '/list',
            templateUrl: 'views/job-list.html',
            controller: 'JobListCtrl',
            controllerAs: 'jobList',
            data: { pageTitle: 'job列表', specialClass: 'sticky-header' }
        })
        .state('job.detail', {
            url: '/detail/{jobId}',
            templateUrl: 'views/job-detail.html',
            controller: 'JobDetailCtrl',
            controllerAs: 'jobDetail',
            data: { pageTitle: 'job详情', specialClass: 'sticky-header' }
        });
}
