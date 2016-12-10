/**
 * @author zhujian@thinkerx.com
 */

(function() {
    angular.module('shyh', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize',                   // ngSanitize
        'ngCookies',
        // 'ngAnimate',
        //'toaster',
        //'summernote',
        //'AngularPrint',
        'LocalStorageModule'
        ]
    )
    .config(setCookiesProvider)
    /**
     * 全局错误信息
     */
    .constant('QINIU_DOMAIN', '');
    setCookiesProvider.$inject = ['$cookiesProvider'];

    function setCookiesProvider($cookiesProvider) {
        $cookiesProvider.expires = 30 * 60 * 1000;
    }
})();

angular
    .module('shyh')
    .config(mainConfig);

mainConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider'];

function mainConfig($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('shyh')
        .setStorageType('sessionStorage');

    $urlRouterProvider.otherwise("/passport/login");
}

angular
    .module('shyh')
    .run(['$rootScope', '$state', function($rootScope, $state) {
        $rootScope.$state = $state;
    }]);


angular
    .module('shyh')
    .controller('MainController', MainController)
    .controller('NavigationCtrl', NavigationCtrl);

MainController.$inject = [];

function MainController() {
    var vm = this;
}

/**
 * 所有公用service都加到这里
 *
 * @author liuluxi@thinkerx.com
 */

angular
    .module('shyh')
    .factory('Ajax', Ajax)
    .factory('AlertBox', AlertBox);


angular
    .module('shyh')
    .directive('pageTitle', pageTitle)
    .directive('landingScrollspy', landingScrollspy);


angular
    .module('shyh')
    .filter('userTypeFilter', userTypeFilter)
    .filter('fromBankFilter', fromBankFilter);

/*
 * 分析统计配置
 *
 * author: LIUluxi
 */
angular
    .module('shyh')
    .config(AnalysisRouter)
    .controller('AnalysisRuleCtrl', AnalysisRuleCtrl)
    .controller('AnalysisTradeCtrl', AnalysisTradeCtrl)
    .controller('AnalysisWarningCtrl', AnalysisWarningCtrl)
    .factory('Analysis', Analysis);

/*
 * 交易检测配置
 *
 * author: LIUluxi
 */
angular
    .module('shyh')
    .config(DetectRouter)
    .controller('DetectCtrl', DetectCtrl)
    .factory('Detect', Detect);

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


angular
    .module('shyh')
    .config(passportRouter)
    .controller('LoginCtrl', LoginCtrl)
    .factory('Passport', Passport);

/*
 * 概览配置
 *
 * author: LIUluxi
 */
angular
    .module('shyh')
    .config(PreviewRouter)
    .controller('PreviewCtrl', PreviewCtrl);


angular
    .module('shyh')
    .config(ruleRouter)
    .factory('Rule', Rule)
    .controller('RuleListCtrl', RuleListCtrl)
    .controller('RuleDetailCtrl', RuleDetailCtrl);

/*
 * 模拟数据配置
 *
 * author: LIUluxi
 */
angular
    .module('shyh')
    .config(SimulateRouter)
    .controller('SimulateCtrl', SimulateCtrl)
    .factory('Simulate', Simulate);

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

/*
 * 分析统计路由配置
 *
 * author: LIUluxi
 */
AnalysisRouter.$inject = ['$stateProvider'];

function AnalysisRouter($stateProvider) {
    $stateProvider
        .state('analysis', {
            url: '/analysis',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('analysis.rule', {
            url: '/rule',
            templateUrl: 'views/analysis-rule.html',
            controller: 'AnalysisRuleCtrl',
            controllerAs: 'analysisRule',
            data: { pageTitle: '规则触发情况统计', specialClass: 'sticky-header' }
        })
        .state('analysis.trade', {
            url: '/trade',
            templateUrl: 'views/analysis-trade.html',
            controller: 'AnalysisTradeCtrl',
            controllerAs: 'analysisTrade',
            data: { pageTitle: '欺诈交易统计', specialClass: 'sticky-header' }
        })
        .state('analysis.warning', {
            url: '/warning',
            templateUrl: 'views/analysis-warning.html',
            controller: 'AnalysisWarningCtrl',
            controllerAs: 'analysisWarning',
            data: { pageTitle: '可疑警报统计', specialClass: 'sticky-header' }
        });
}

/*
 * 交易检测路由配置
 *
 * author: LIUluxi
 */
DetectRouter.$inject = ['$stateProvider'];

function DetectRouter($stateProvider) {
    $stateProvider
        .state('detect', {
            url: '/detect',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('detect.detect', {
            url: '/',
            templateUrl: 'views/detect.html',
            controller: 'DetectCtrl',
            controllerAs: 'detect',
            data: { pageTitle: '交易检测', specialClass: 'sticky-header' }
        });
}

/*
 * 数据采集路由配置
 *
 * author: LIUluxi
 */
GatherRouter.$inject = ['$stateProvider'];

function GatherRouter($stateProvider) {
    $stateProvider
        .state('gather', {
            url: '/gather',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('gather.bank', {
            url: '/bank',
            templateUrl: 'views/gather-bank.html',
            controller: 'GatherBankCtrl',
            controllerAs: 'gatherBank',
            data: { pageTitle: '数据采集 ｜ 银行业务数据', specialClass: 'sticky-header' }
        })
        .state('gather.third', {
            url: '/third',
            templateUrl: 'views/gather-third.html',
            controller: 'GatherThirdCtrl',
            controllerAs: 'gatherThird',
            data: { pageTitle: '数据采集 ｜ 第三方数据', specialClass: 'sticky-header' }
        })
        .state('gather.table', {
            url: '/table',
            templateUrl: 'views/gather-table.html',
            controller: 'GatherTableCtrl',
            controllerAs: 'gatherTable',
            data: { pageTitle: '数据采集 ｜ 业务数据表', specialClass: 'sticky-header' }
        });
}

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

/*
 * 名单管理路由配置
 *
 * author: LIUluxi
 */
ListRouter.$inject = ['$stateProvider'];

function ListRouter($stateProvider) {
    $stateProvider
        .state('list', {
            url: '/list',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('list.user', {
            url: '/user',
            templateUrl: 'views/user-list.html',
            controller: 'UserListCtrl',
            controllerAs: 'userList',
            data: { pageTitle: '用户名单列表', specialClass: 'sticky-header' }
        })
        .state('list.ip', {
            url: '/ip',
            templateUrl: 'views/ip-list.html',
            controller: 'IpListCtrl',
            controllerAs: 'ipList',
            data: { pageTitle: 'IP地址名单列表', specialClass: 'sticky-header' }
        })
        .state('list.phone', {
            url: '/phone',
            templateUrl: 'views/phone-list.html',
            controller: 'PhoneListCtrl',
            controllerAs: 'phoneList',
            data: { pageTitle: '手机名单列表', specialClass: 'sticky-header' }
        });
}

/*
 * 模型管理路由配置
 *
 * author: LIUluxi
 */
ModelRouter.$inject = ['$stateProvider'];

function ModelRouter($stateProvider) {
    $stateProvider
        .state('model', {
            url: '/model',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('model.list', {
            url: '/list',
            templateUrl: 'views/model-list.html',
            controller: 'ModelListCtrl',
            controllerAs: 'modelList',
            data: { pageTitle: '模型列表', specialClass: 'sticky-header' }
        })
        .state('model.detail', {
            url: '/detail/{modelId}',
            templateUrl: 'views/model-detail.html',
            controller: 'ModelDetailCtrl',
            controllerAs: 'modelDetail',
            data: { pageTitle: '模型列表', specialClass: 'sticky-header' }
        });
}

/*
* 登陆注册路由配置
*
* author: LIUluxi
*/
passportRouter.$inject = ['$stateProvider'];

function passportRouter($stateProvider) {
    $stateProvider
        .state('passport', {
            abstract: true,
            url: '/passport',
            template: '<div ui-view></div>'
        })
        .state('passport.login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login',
            data: { pageTitle: '登录', specialClass: 'login-body' }
        });
}

/*
 * 概览路由配置
 *
 * author: LIUluxi
 */
PreviewRouter.$inject = ['$stateProvider'];

function PreviewRouter($stateProvider) {
    $stateProvider
        .state('preview', {
            url: '/preview',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('preview.home', {
            url: '/',
            templateUrl: 'views/preview.html',
            controller: 'PreviewCtrl',
            controllerAs: 'preview',
            data: { pageTitle: '概览', specialClass: 'sticky-header' }
        });
}


ruleRouter.$inject = ['$stateProvider'];

function ruleRouter($stateProvider) {
    $stateProvider
        .state('rule', {
            abstract: true,
            url: '/rule',
            templateUrl: 'views/_shared/content.html'
        })
        .state('rule.list', {
            url: '/list',
            templateUrl: 'views/rule-list.html',
            controller: 'RuleListCtrl',
            controllerAs: 'ruleList',
            data: { pageTitle: '规则管理', specialClass: 'sticky-header' }
        })
        .state('rule.detail', {
            url: '/detail/{ruleId}',
            templateUrl: 'views/rule-detail.html',
            controller: 'RuleDetailCtrl',
            controllerAs: 'ruleDetail',
            data: { pageTitle: '规则详情', specialClass: 'sticky-header' }
        });
}

/*
 * 模拟管理路由配置
 *
 * author: LIUluxi
 */
SimulateRouter.$inject = ['$stateProvider'];

function SimulateRouter($stateProvider) {
    $stateProvider
        .state('simulate', {
            url: '/simulate',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('simulate.add', {
            url: '/add',
            templateUrl: 'views/simulate.html',
            controller: 'SimulateCtrl',
            controllerAs: 'simulate',
            data: { pageTitle: '数据模拟', specialClass: 'sticky-header' }
        });
}

/*
 * 警报展示路由配置
 *
 * author: LIUluxi
 */
WarningRouter.$inject = ['$stateProvider'];

function WarningRouter($stateProvider) {
    $stateProvider
        .state('warning', {
            url: '/warning',
            abstract: true,
            templateUrl: 'views/_shared/content.html'
        })
        .state('warning.list', {
            url: '/list',
            templateUrl: 'views/warning.html',
            controller: 'WarningListCtrl',
            controllerAs: 'warningList',
            data: { pageTitle: '警报展示', specialClass: 'sticky-header' }
        });
}


angular
    .module('shyh')
    .controller('TopNavBarCtrl', TopNavBarCtrl);

TopNavBarCtrl.$inject = ['$rootScope', 'AlertBox', 'Passport'];

function TopNavBarCtrl($rootScope, AlertBox, Passport) {
    var vm = this;

    vm.logout = logout;

    function logout() {
        Passport
            .logout()
            .success(function(response) {
                if(response.status === 0) {
                    $rootScope.$state.go('passport.login');
                } else {
                    AlertBox.error(error.msg);
                }
            })
            .error(function(error) {
                AlertBox.error(error.msg);
            });
    }
}


NavigationCtrl.$inject = ['$rootScope', 'Passport', 'AlertBox'];

function NavigationCtrl($rootScope, Passport, AlertBox) {
    var vm = this;

    vm.logout = logout;

    initLeftMenu();

    function initLeftMenu() {
        $("html").niceScroll({styler:"fb",cursorcolor:"#65cea7", cursorwidth: '6', cursorborderradius: '0px', background: '#424f63', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});

        $(".left-side").niceScroll({styler:"fb",cursorcolor:"#65cea7", cursorwidth: '3', cursorborderradius: '0px', background: '#424f63', spacebarenabled:false, cursorborder: '0'});


        $(".left-side").getNiceScroll();
        if ($('body').hasClass('left-side-collapsed')) {
            $(".left-side").getNiceScroll().hide();
        }

        // Toggle Left Menu
        jQuery('.menu-list > a').click(function() {

            var parent = jQuery(this).parent();
            var sub = parent.find('> ul');

            if(!jQuery('body').hasClass('left-side-collapsed')) {
                if(sub.is(':visible')) {
                    sub.slideUp(200, function(){
                        parent.removeClass('nav-active');
                        jQuery('.main-content').css({height: ''});
                        mainContentHeightAdjust();
                    });
                } else {
                    visibleSubMenuClose();
                    parent.addClass('nav-active');
                    sub.slideDown(200, function(){
                        mainContentHeightAdjust();
                    });
                }
            }
            return false;
        });

        function visibleSubMenuClose() {
            jQuery('.menu-list').each(function() {
                var t = jQuery(this);
                if(t.hasClass('nav-active')) {
                    t.find('> ul').slideUp(200, function(){
                        t.removeClass('nav-active');
                    });
                }
            });
        }

        function mainContentHeightAdjust() {
            // Adjust main content height
            var docHeight = jQuery(document).height();
            if(docHeight > jQuery('.main-content').height())
                jQuery('.main-content').height(docHeight);
        }

        //  class add mouse hover
        jQuery('.custom-nav > li').hover(function(){
            jQuery(this).addClass('nav-hover');
        }, function(){
            jQuery(this).removeClass('nav-hover');
        });


        // Menu Toggle
        jQuery('.toggle-btn').click(function(){
            $(".left-side").getNiceScroll().hide();

            if ($('body').hasClass('left-side-collapsed')) {
                $(".left-side").getNiceScroll().hide();
            }
            var body = jQuery('body');
            var bodyposition = body.css('position');

            if(bodyposition != 'relative') {

                if(!body.hasClass('left-side-collapsed')) {
                    body.addClass('left-side-collapsed');
                    jQuery('.custom-nav ul').attr('style','');

                    jQuery(this).addClass('menu-collapsed');

                } else {
                    body.removeClass('left-side-collapsed chat-view');
                    jQuery('.custom-nav li.active ul').css({display: 'block'});

                    jQuery(this).removeClass('menu-collapsed');

                }
            } else {

                if(body.hasClass('left-side-show'))
                    body.removeClass('left-side-show');
                else
                    body.addClass('left-side-show');

                mainContentHeightAdjust();
            }

        });
    }

    function logout() {
        Passport
            .logout()
            .success(function(response) {
                if(response.status === 0) {
                    $rootScope.$state.go('passport.login');
                } else {
                    AlertBox.error(error.msg);
                }
            })
            .error(function(error) {
                AlertBox.error(error.msg);
            });
    }
}

/*
 * 交易检测控制器
 *
 * author: LIUluxi
 */
DetectCtrl.$inject = ['$scope', 'Detect', 'AlertBox'];

function DetectCtrl($scope, Detect, AlertBox) {
    var vm = this;

    vm.fraudList = [];

    vm.showInPage = showInPage;
    vm.importExcel = importExcel;

    $scope.uploadImage = function() {
        $('.detect-model').show();
    };

    function showInPage() {
        $('.detect-model').hide();
        Detect
            .detectTrade()
            .success(function(response) {
                if(response.status == 0) {
                    vm.fraudList = response.data;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function importExcel() {
        $('.detect-model').hide();
    }
}

/*
 * job详情控制器
 *
 * author: LIUluxi
 */
JobDetailCtrl.$inject = ['$stateParams', 'Job', 'AlertBox'];

function JobDetailCtrl($stateParams, Job, AlertBox) {
    var vm = this;

    vm.jobId = $stateParams.jobId;
    vm.jobName = '';
    vm.createdAt = '';
    vm.status = '';
    vm.beganAt = '';
    vm.endedAt = '';
    vm.dataset = null;
    vm.model = null;

    init();

    function init() {
        Job
            .getDetail(vm.jobId)
            .success(function(response) {
                if(response.status === 0) {
                    var data = response.data;
                    vm.jobName = data.job;
                    vm.createdAt = data.created_at;
                    vm.status = data.status;
                    vm.beganAt = data.began_at;
                    vm.endedAt = data.ended_at;
                    vm.dataset = data.dataset;
                    vm.model = data.model;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.success(response.msg);
            });
    }
}

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

/*
 * IP名单列表控制器
 *
 * author: LIUluxi
 */
IpListCtrl.$inject = ['List', 'AlertBox'];

function IpListCtrl(List, AlertBox) {
    var vm = this;

    vm.addPanelFlag = false;
    vm.total = 0;
    vm.page = 1;
    vm.pageSize = 10;
    vm.ipId = '';
    vm.ipData = '';
    vm.safety = '';
    vm.ipList = null;

    vm.refreshIpList = refreshIpList;
    vm.submit = submit;
    vm.deleteIp = deleteIp;
    vm.modify = modify;

    refreshIpList();

    function refreshIpList() {
        List
            .getIpList(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.ipList = response.data.list;
                    vm.total = response.data.total;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function submit() {
        if(vm.ipId == '') {
            addIp();
        } else {
            modifyIp();
        }
    }

    function addIp() {
        List
            .addIp(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                    clearPanel();
                    refreshIpList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function modifyIp() {
        List
            .modifyIp(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                    clearPanel();
                    refreshIpList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function modify(ip) {
        vm.addPanelFlag = true;
        vm.ipId = ip.id;
        vm.ipData = ip.ip;
        vm.safety = ip.safety;
    }

    function deleteIp(id) {
        List
            .deleteIp(id)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('删除成功');
                    refreshIpList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function clearPanel() {
        vm.addPanelFlag = false;
        vm.ipData = '';
        vm.safety = '';
        vm.ipId = '';
    }
}

/*
 * 电话名单列表控制器
 *
 * author: LIUluxi
 */
PhoneListCtrl.$inject = ['List', 'AlertBox'];

function PhoneListCtrl(List, AlertBox) {
    var vm = this;

    vm.addPanelFlag = false;
    vm.total = 0;
    vm.page = 1;
    vm.pageSize = 10;
    vm.phoneId = '';
    vm.phone = '';
    vm.safety = '';
    vm.phoneList = null;

    vm.refreshPhoneList = refreshPhoneList;
    vm.submit = submit;
    vm.deletePhone = deletePhone;
    vm.modify = modify;

    refreshPhoneList();

    function refreshPhoneList() {
        List
            .getPhoneList(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.phoneList = response.data.list;
                    vm.total = response.data.total;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function submit() {
        if(vm.phoneId == '') {
            addPhone();
        } else {
            modifyPhone();
        }
    }

    function addPhone() {
        List
            .addPhone(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                    clearPanel();
                    refreshPhoneList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function modifyPhone() {
        List
            .modifyPhone(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                    clearPanel();
                    refreshPhoneList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function modify(phone) {
        vm.addPanelFlag = true;
        vm.phoneId = phone.id;
        vm.phone = phone.phoneNumber;
        vm.safety = phone.safety;
    }

    function deletePhone(id) {
        List
            .deletePhone(id)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('删除成功');
                    refreshPhoneList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function clearPanel() {
        vm.addPanelFlag = false;
        vm.phoneId = '';
        vm.phone = '';
        vm.safety = '';
    }
}

/*
 * 用户名单列表控制器
 *
 * author: LIUluxi
 */
UserListCtrl.$inject = ['List', 'AlertBox'];

function UserListCtrl(List, AlertBox) {
    var vm = this;

    vm.addPanelFlag = false;
    vm.total = 0;
    vm.page = 1;
    vm.pageSize = 10;
    vm.userId = '';
    vm.name = '';
    vm.userType = '';
    vm.userList = null;

    vm.refreshUserList = refreshUserList;
    vm.modify = modify;
    vm.submit = submit;

    refreshUserList();

    function refreshUserList() {
        List
            .getUserList(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.userList = response.data.list;
                    vm.total = response.data.total;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function submit() {
        if(vm.userType == '') {
            AlertBox.error('请选择用户类型');
            return;
        }
        List
            .modifyUser(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                    clearPanel();
                    refreshUserList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function modify(user) {
        vm.addPanelFlag = true;
        vm.userId = user.id;
        vm.name = user.username;
        vm.userType = user.usertype + '';
    }

    function clearPanel() {
        vm.addPanelFlag = false;
        vm.userId = '';
        vm.name = '';
        vm.userType = '';
    }
}

/*
 * 模型详情控制器
 *
 * author: LIUluxi
 */
ModelDetailCtrl.$inject = ['$stateParams', 'Model', 'AlertBox'];

function ModelDetailCtrl($stateParams, Model, AlertBox) {
    var vm = this;

    vm.modelId = $stateParams.modelId;
    vm.modelName = '';
    vm.createdAt = '';
    vm.status = '';
    vm.templateName = '';
    vm.parameters = null;
    vm.trainingHistory = null;

    init();

    function init() {
        Model
            .getDetail(vm.modelId)
            .success(function(response) {
                if(response.status === 0) {
                    var data = response.data;
                    vm.modelName = data.model;
                    vm.createdAt = data.created_at;
                    vm.status = data.status;
                    vm.templateName = data.template_name;
                    vm.parameters = data.parameters;
                    vm.trainingHistory = data.training_history;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.success(response.msg);
            });
    }
}

/*
 * 模型列表控制器
 *
 * author: LIUluxi
 */
ModelListCtrl.$inject = ['$rootScope', 'Model', 'AlertBox'];

function ModelListCtrl($rootScope, Model, AlertBox) {
    var vm = this;

    vm.modelName = '';
    vm.templateId = '';
    vm.modelList = null;
    vm.addPanelFlag = false;
    vm.page = 1;
    vm.pageSize = 10;
    vm.totalModels = 50;

    vm.submit = submit;
    vm.del = del;
    vm.gotoDetail = gotoDetail;
    vm.refreshModelList = refreshModelList;

    refreshModelList();

    function refreshModelList() {
        Model
            .list()
            .success(function(response) {
                if(response.status === 0) {
                    vm.modelList = response.data;
                } else {
                    AlertBox.error(response.msg);
                }
            });
    }

    function submit() {
        if(vm.modelName === '') {
            AlertBox.error('模型名称不能为空');
            return;
        }
        if(vm.templateId === '') {
            AlertBox.error('请选择模型');
            return;
        }
        Model
            .add(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.modelName = '';
                    vm.templateId = '';
                    vm.addPanelFlag = false;
                    //refreshModelList();
                    vm.modelList.push(response.data);
                } else {
                    AlertBox.error(response.msg);
                }
            });
    }

    function del(modelId) {
        vm.modelList.splice(modelId - 1, 1);
        return;
        Model
            .del(modelId)
            .success(function(response) {
                if(response.status === 0) {
                    refreshModelList();
                } else {
                    AlertBox.error(response.msg);
                }
            });
    }

    function gotoDetail(modelId) {
        $rootScope.$state.go('model.detail', {modelId: modelId});
    }
}

/*
 * 概览控制器
 *
 * author: LIUluxi
 */
PreviewCtrl.$inject = [];

function PreviewCtrl() {
    var vm = this;
}


RuleDetailCtrl.$inject = ['$stateParams', 'Rule', 'AlertBox'];

function RuleDetailCtrl($stateParams, Rule, AlertBox) {
    var vm = this;

    vm.ruleId = $stateParams.ruleId;
    vm.ruleName = '';
    vm.frequency = '';
    vm.type = '';
    vm.safeLevel = '';
    vm.ruleFactor = null;

    init();

    function init() {
        Rule
            .getDetail(vm.ruleId)
            .success(function(response) {
                if(response.status === 0) {
                    var result = response.data;
                    vm.ruleName = result.bankRule.rulename;
                    vm.frequency = result.bankRule.frequency;
                    vm.type = result.bankRule.type;
                    vm.safeLevel = result.bankRule.safeLevel;
                    vm.ruleFactor = result.ruleFactor;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }
}


RuleListCtrl.$inject = ['$rootScope', 'Rule', 'AlertBox'];

function RuleListCtrl($rootScope, Rule, AlertBox) {
    var vm = this;

    vm.addPanelFlag = false;
    vm.ruleList = null;
    vm.ruleId = '';
    vm.ruleName = '';
    vm.type = '';
    vm.safeLevel = '';
    vm.time = '';
    vm.deals = '';
    vm.isCommonFromPlace = '';
    vm.page = 1;
    vm.pageSize = 10;
    vm.total = 0;
    vm.extraConditionList = [];

    vm.refreshRuleList = refreshRuleList;
    vm.submit = submit;
    vm.modify = modify;
    vm.del = del;
    vm.goToDetail = goToDetail;
    vm.addCondition = addCondition;
    vm.deleteCondition = deleteCondition;

    refreshRuleList();

    function refreshRuleList() {
        Rule
            .list(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.ruleList = response.data.list;
                    angular.forEach(vm.ruleList, function(rule) {
                        rule.ruledesc = JSON.parse(rule.ruledesc);
                        rule.ruledesc.isCommonFromPlace = rule.ruledesc.isCommonFromPlace ? 1 : 0;
                    });
                    console.log(vm.ruleList);
                    vm.total = response.data.total;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function submit() {
        if(vm.ruleId) {
            modifyRule();
        } else {
            addRule();
        }
    }

    function modify(rule) {
        vm.addPanelFlag = true;
        vm.ruleId = rule.id;
        vm.ruleName = rule.rulename;
        vm.type = rule.type;
        vm.safeLevel = rule.safeLevel;
        vm.time = rule.ruledesc.time;
        vm.deals = rule.ruledesc.deals;
        vm.isCommonFromPlace = rule.ruledesc.isCommonFromPlace + '';
    }

    function addRule() {
        Rule
            .add(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.addPanelFlag = false;
                    clearForm();
                    AlertBox.success('添加成功');
                    refreshRuleList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function modifyRule() {
        Rule
            .modify(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.addPanelFlag = false;
                    clearForm();
                    AlertBox.success('修改成功');
                    refreshRuleList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function del(id) {
        Rule
            .del(id)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('删除成功');
                    refreshRuleList();
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function goToDetail(id) {
        $rootScope.$state.go('rule.detail', {ruleId: id});
    }

    function clearForm() {
        vm.ruleId = '';
        vm.ruleName = '';
        vm.type = '';
        vm.safeLevel = '';
        vm.time = '';
        vm.deals = '';
        vm.isCommonFromPlace = '';
    }

    function addCondition() {
        vm.extraConditionList.push({
            attribute: '',
            operator: '',
            threshold: ''
        });
    }

    function deleteCondition(index) {
        vm.extraConditionList.splice(index, 1);
    }
}

/*
 * 模拟数据控制器
 *
 * author: LIUluxi
 */
SimulateCtrl.$inject = ['Simulate', 'AlertBox'];

function SimulateCtrl(Simulate, AlertBox) {
    var vm = this;

    vm.timeFrom = '';
    vm.timeTo = '';
    vm.moneyFrom = '';
    vm.moneyTo = '';
    vm.city = '';
    vm.amount = '';
    vm.channel = "";
    vm.serviceType = "";
    vm.ip = "";
    vm.state = "";
    vm.authMode = "";
    vm.terminalNumber = "";
    vm.mac = "";

    vm.addNormalPanelFlag = true;
    vm.addFraudPanelFlag = false;
    vm.addRulePanelFlag = false;

    vm.fraudNumIdFrom = '';
    vm.fraudNumIdTo1 = '';
    vm.fraudNumIdTo2 = '';
    vm.fraudTimeFrom = '';
    vm.fraudTimeTo = '';
    vm.fraudMoneyFrom = '';
    vm.fraudMoneyTo = '';
    vm.fraudNumCity = '';
    vm.timeRange = "";
    vm.timeType = "";
    vm.percent = "";
    
    vm.fraudChannel = "";
    vm.fraudServiceType = "";
    vm.fraudIp = "";
    vm.fraudState = "";
    vm.fraudAuthMode = "";
    vm.fraudTerminalNumber = "";
    vm.fraudMac= "";

    vm.submitNormal = submitNormal;
    vm.submitFraud = submitFraud;
    
    vm.clearNormal = clearNormal;
    vm.clearFraud = clearFraud;
    vm.clearChannel = clearChannel;
    vm.clearSt = clearSt;
    vm.clearIp = clearIp;
    vm.clearState = clearState;
    vm.clearAm = clearAm;
    vm.clearTn = clearTn;

    init();


    function init() {
        initPicker();
    }

    function initPicker() {
        $(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii:ss'});
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
    
    function submitNormal() {console.log(vm);
        if(vm.timeFrom === ''|| vm.timeTo === '' || vm.moneyFrom === ''||vm.moneyTo === ''||vm.city === ''||vm.amount === ''){
            AlertBox.error('输入有误');
            return;
        }
        Simulate
            .addNormal(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function submitFraud() {console.log(vm);
        if(vm.fraudNumIdFrom === ''|| vm.fraudNumIdTo1 === '' || vm.fraudNumIdTo2 === ''||vm.fraudTimeFrom === ''||vm.fraudTimeTo === ''||vm.fraudMoneyFrom === ''||vm.fraudMoneyTo ==='' ||vm.fraudNumCity ===''||
        vm.timeRange === ''|| vm.timeType === '' ||vm.percent === ''){
            AlertBox.error('输入有误');
            return;
        }
        Simulate
            .addFraud(vm)
            .success(function(response) {
                if(response.status === 0) {
                    AlertBox.success('添加成功');
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }
    function clearNormal(){
        vm.timeFrom = '';
        vm.timeTo = '';
        vm.moneyFrom = '';
        vm.moneyTo = '';
        vm.city = '';
        vm.amount = '';
        vm.channel = "";
        vm.serviceType = "";
        vm.ip = "";
        vm.state = "";
        vm.authMode = "";
        vm.terminalNumber = "";
    }
    function clearFraud(){
        vm.fraudNumIdFrom = '';
        vm.fraudNumIdTo1 = '';
        vm.fraudNumIdTo2 = '';
        vm.fraudTimeFrom = '';
        vm.fraudTimeTo = '';
        vm.fraudMoneyFrom = '';
        vm.fraudMoneyTo = '';
        vm.fraudNumCity = '';
        vm.timeRange = "";
        vm.timeType = "";
        vm.percent = "";
        
        vm.fraudChannel = "";
        vm.fraudServiceType = "";
        vm.fraudIp = "";
        vm.fraudState = "";
        vm.fraudAuthMode = "";
        vm.fraudTerminalNumber = "";
        vm.fraudMac = "";

    }
    function clearChannel(){
        vm.channel=""; 
        vm.fraudChannel = "";
    }
     function clearSt(){
        vm.serviceType = "";
        vm.fraudServiceType = "";
     }
     function clearIp(){
        vm.ip = "";
        vm.fraudIp = "";
     }
     function clearState(){
        vm.state = "";
        vm.fraudState = "";
     }
     function clearAm(){
        vm.authMode = "";
        vm.fraudAuthMode = "";
     }
     function clearTn(){
        vm.terminalNumber = "";
        vm.fraudTerminalNumber = "";
     }
    
}

/*
 * 警报展示控制器
 *
 * author: LIUluxi
 */
WarningListCtrl.$inject = ['Warning', 'AlertBox'];

function WarningListCtrl(Warning, AlertBox) {
    var vm = this;

    vm.warningList = null;
    vm.page = 1;
    vm.pageSize = 20;
    vm.total = 0;
    vm.safety = 0;
    vm.safeAction = 5;

    refreshWarningList();

    function refreshWarningList() {
        Warning
            .list(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.warningList = response.data.list;
                    vm.total = response.data.total;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }
}

/*
 * 规则触发统计控制器
 *
 * author: LIUluxi
 */
AnalysisTradeCtrl.$inject = ['Analysis', 'AlertBox'];

function AnalysisTradeCtrl(Analysis, AlertBox) {
    var vm = this;

    vm.ruleList = null;

    init();

    function init() {
        Analysis
            .getTrade()
            .success(function(response) {
                if(response.status === 0) {
                    vm.ruleList = response.data.data;
                    //drawBusinessDonut(response.data.businessDistribute);
                    //drawDistrictDonut(response.data.areaDistribute);
                    //drawMoneyDonut(response.data.moneyDistribute);
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function drawBusinessDonut(business) {
        var total = business.sjyh + business.dhyh + business.wsyh + business.wxyh;
        Morris.Donut({
            element: 'business-donut',
            data: [
                {value: business.sjyh, label: '手机银行', formatted: (business.sjyh / total * 100).toFixed(2) + '%' },
                {value: business.dhyh, label: '电话银行', formatted: (business.dhyh / total * 100).toFixed(2) + '%' },
                {value: business.wsyh, label: '网上银行', formatted: (business.wsyh / total * 100).toFixed(2) + '%' },
                {value: business.wxyh, label: '微信银行', formatted: (business.wxyh / total * 100).toFixed(2) + '%' }
            ],
            backgroundColor: false,
            labelColor: '#666',
            colors: [
                '#4acacb','#6a8bc0','#5ab6df','#fe8676'
            ],
            formatter: function (x, data) { return data.formatted; }
        });
    }

    function drawDistrictDonut(district) {
        var total = district.beijing + district.guizhou + district.fujian + district.shanghai + district.guangdong + district.others;
        Morris.Donut({
            element: 'district-donut',
            data: [
                {value: district.fujian, label: '福建省', formatted: (district.fujian / total * 100).toFixed(2) + '%' },
                {value: district.shanghai, label: '上海市', formatted: (district.shanghai / total * 100).toFixed(2) + '%' },
                {value: district.guangdong, label: '广东省', formatted: (district.guangdong / total * 100).toFixed(2) + '%' },
                {value: district.beijing, label: '北京市', formatted: (district.beijing / total * 100).toFixed(2) + '%' },
                {value: district.guizhou, label: '贵州省', formatted: (district.guizhou / total * 100).toFixed(2) + '%' },
                {value: district.others, label: '其他', formatted: (district.others / total * 100).toFixed(2) + '%' }
            ],
            backgroundColor: false,
            labelColor: '#666',
            colors: [
                '#4acacb','#6a8bc0','#5ab6df','#fe8676','#f0ad4e','#6dc5a3'
            ],
            formatter: function (x, data) { return data.formatted; }
        });
    }

    function drawMoneyDonut(money) {
        var total = money.m0 + money.m1 + money.m2 + money.m3 + money.m4;
        Morris.Donut({
            element: 'money-donut',
            data: [
                {value: money.m1, label: '5000-10000元', formatted: (money.m1 / total * 100).toFixed(2) + '%' },
                {value: money.m2, label: '10000-25000元', formatted: (money.m2 / total * 100).toFixed(2) + '%' },
                {value: money.m0, label: '0-5000元', formatted: (money.m0 / total * 100).toFixed(2) + '%' },
                {value: money.m3, label: '25000-50000元', formatted: (money.m3 / total * 100).toFixed(2) + '%' },
                {value: money.m4, label: '50000元以上', formatted: (money.m4 / total * 100).toFixed(2) + '%' }
            ],
            backgroundColor: false,
            labelColor: '#666',
            colors: [
                '#4acacb','#6a8bc0','#5ab6df','#fe8676','#f0ad4e'
            ],
            formatter: function (x, data) { return data.formatted; }
        });
    }
}

/*
 * 规则触发统计控制器
 *
 * author: LIUluxi
 */
AnalysisRuleCtrl.$inject = ['Analysis', 'AlertBox'];

function AnalysisRuleCtrl(Analysis, AlertBox) {
    var vm = this;

    vm.ruleList = null;

    init();

    function init() {
        Analysis
            .getRule()
            .success(function(response) {
                if(response.status === 0) {
                    vm.ruleList = response.data.rules;
                    /*var business = response.data.businessDistribute;
                    var total = business.sjyh + business.dhyh + business.wsyh + business.wxyh;
                    Morris.Donut({
                        element: 'graph-donut',
                        data: [
                            {value: business.sjyh, label: '手机银行', formatted: (business.sjyh / total * 100).toFixed(2) + '%' },
                            {value: business.dhyh, label: '电话银行', formatted: (business.dhyh / total * 100).toFixed(2) + '%' },
                            {value: business.wsyh, label: '网上银行', formatted: (business.wsyh / total * 100).toFixed(2) + '%' },
                            {value: business.wxyh, label: '微信银行', formatted: (business.wxyh / total * 100).toFixed(2) + '%' }
                        ],
                        backgroundColor: false,
                        labelColor: '#666',
                        colors: [
                            '#4acacb','#6a8bc0','#5ab6df','#fe8676'
                        ],
                        formatter: function (x, data) { return data.formatted; }
                    });*/
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }
}

/*
 * 警报统计控制器
 *
 * author: LIUluxi
 */
AnalysisWarningCtrl.$inject = ['Analysis', 'AlertBox'];

function AnalysisWarningCtrl(Analysis, AlertBox) {
    var vm = this;

    vm.ruleList = null;

    init();

    function init() {
        //drawMap();
        Analysis
            .getTrade()
            .success(function(response) {
                if(response.status === 0) {
                    vm.ruleList = response.data.data;
                    /*drawBusinessDonut(response.data.businessDistribute);
                    drawDistrictDonut(response.data.areaDistribute);
                    drawMoneyDonut(response.data.moneyDistribute);*/
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            });
    }

    function drawBusinessDonut(business) {
        var total = business.sjyh + business.dhyh + business.wsyh + business.wxyh;
        Morris.Donut({
            element: 'business-donut',
            data: [
                {value: business.sjyh, label: '手机银行', formatted: (business.sjyh / total * 100).toFixed(2) + '%' },
                {value: business.dhyh, label: '电话银行', formatted: (business.dhyh / total * 100).toFixed(2) + '%' },
                {value: business.wsyh, label: '网上银行', formatted: (business.wsyh / total * 100).toFixed(2) + '%' },
                {value: business.wxyh, label: '微信银行', formatted: (business.wxyh / total * 100).toFixed(2) + '%' }
            ],
            backgroundColor: false,
            labelColor: '#666',
            colors: [
                '#4acacb','#6a8bc0','#5ab6df','#fe8676'
            ],
            formatter: function (x, data) { return data.formatted; }
        });
    }

    function drawDistrictDonut(district) {
        var total = district.beijing + district.guizhou + district.fujian + district.shanghai + district.guangdong + district.others;
        Morris.Donut({
            element: 'district-donut',
            data: [
                {value: district.fujian, label: '福建省', formatted: (district.fujian / total * 100).toFixed(2) + '%' },
                {value: district.shanghai, label: '上海市', formatted: (district.shanghai / total * 100).toFixed(2) + '%' },
                {value: district.guangdong, label: '广东省', formatted: (district.guangdong / total * 100).toFixed(2) + '%' },
                {value: district.beijing, label: '北京市', formatted: (district.beijing / total * 100).toFixed(2) + '%' },
                {value: district.guizhou, label: '贵州省', formatted: (district.guizhou / total * 100).toFixed(2) + '%' },
                {value: district.others, label: '其他', formatted: (district.others / total * 100).toFixed(2) + '%' }
            ],
            backgroundColor: false,
            labelColor: '#666',
            colors: [
                '#4acacb','#6a8bc0','#5ab6df','#fe8676','#f0ad4e','#6dc5a3'
            ],
            formatter: function (x, data) { return data.formatted; }
        });
    }

    function drawMoneyDonut(money) {
        var total = money.m0 + money.m1 + money.m2 + money.m3 + money.m4;
        Morris.Donut({
            element: 'money-donut',
            data: [
                {value: money.m1, label: '5000-10000元', formatted: (money.m1 / total * 100).toFixed(2) + '%' },
                {value: money.m2, label: '10000-25000元', formatted: (money.m2 / total * 100).toFixed(2) + '%' },
                {value: money.m0, label: '0-5000元', formatted: (money.m0 / total * 100).toFixed(2) + '%' },
                {value: money.m3, label: '25000-50000元', formatted: (money.m3 / total * 100).toFixed(2) + '%' },
                {value: money.m4, label: '50000元以上', formatted: (money.m4 / total * 100).toFixed(2) + '%' }
            ],
            backgroundColor: false,
            labelColor: '#666',
            colors: [
                '#4acacb','#6a8bc0','#5ab6df','#fe8676','#f0ad4e'
            ],
            formatter: function (x, data) { return data.formatted; }
        });
    }

    function drawMap() {
        var dom = document.getElementById("map-container");
        var myChart = echarts.init(dom);
        option = null;

        function randomData() {
            return Math.round(Math.random()*1000);
        }

        option = {
            title: {
                text: 'iphone销量',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: 'iphone3',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '重庆',value: randomData() },
                        {name: '河北',value: randomData() },
                        {name: '河南',value: randomData() },
                        {name: '云南',value: randomData() },
                        {name: '辽宁',value: randomData() },
                        {name: '黑龙江',value: randomData() },
                        {name: '湖南',value: randomData() },
                        {name: '安徽',value: randomData() },
                        {name: '山东',value: randomData() },
                        {name: '新疆',value: randomData() },
                        {name: '江苏',value: randomData() },
                        {name: '浙江',value: randomData() },
                        {name: '江西',value: randomData() },
                        {name: '湖北',value: randomData() },
                        {name: '广西',value: randomData() },
                        {name: '甘肃',value: randomData() },
                        {name: '山西',value: randomData() },
                        {name: '内蒙古',value: randomData() },
                        {name: '陕西',value: randomData() },
                        {name: '吉林',value: randomData() },
                        {name: '福建',value: randomData() },
                        {name: '贵州',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '青海',value: randomData() },
                        {name: '西藏',value: randomData() },
                        {name: '四川',value: randomData() },
                        {name: '宁夏',value: randomData() },
                        {name: '海南',value: randomData() },
                        {name: '台湾',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                },
                {
                    name: 'iphone4',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '重庆',value: randomData() },
                        {name: '河北',value: randomData() },
                        {name: '安徽',value: randomData() },
                        {name: '新疆',value: randomData() },
                        {name: '浙江',value: randomData() },
                        {name: '江西',value: randomData() },
                        {name: '山西',value: randomData() },
                        {name: '内蒙古',value: randomData() },
                        {name: '吉林',value: randomData() },
                        {name: '福建',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '西藏',value: randomData() },
                        {name: '四川',value: randomData() },
                        {name: '宁夏',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                },
                {
                    name: 'iphone5',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '台湾',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                }
            ]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
}

/*
 * 数据采集－银行业务数据控制器
 *
 * author: LIUluxi
 */
GatherBankCtrl.$inject = ['Gather', 'AlertBox'];

function GatherBankCtrl(Gather, AlertBox) {
    var vm = this;

    vm.dataList = null;
    vm.page = 1;
    vm.pageSize = 20;
    vm.total = 0;

    vm.refreshDataList = refreshDataList;

    refreshDataList();

    function refreshDataList() {
        Gather
            .getBank(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.total = response.data.total;
                    vm.dataList = response.data.list;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            })
    }
}

/*
 * 数据采集－业务数据表控制器
 *
 * author: LIUluxi
 */
GatherTableCtrl.$inject = [];

function GatherTableCtrl() {
    var vm = this;

    vm.tableList = [{
        name: 'cash_business',
        detail: '现金业务'
    }, {
        name: 'transfer_business',
        detail: '转账业务'
    }, {
        name: 'currency_exchange_business',
        detail: '汇兑业务'
    }, {
        name: 'bank_drafts',
        detail: '银行汇票业务'
    }, {
        name: 'deposit_sys',
        detail: '存款系统'
    }, {
        name: 'loans_sys',
        detail: '贷款系统'
    }, {
        name: 'trade_finance_sys',
        detail: '贸易融资系统'
    }, {
        name: 'central_liability_sys',
        detail: '中心债务系统'
    }, {
        name: 'factoring_business',
        detail: '保理业务'
    }, {
        name: 'finance_business',
        detail: '融资业务'
    }];
}

/*
 * 数据采集－第三方数据控制器
 *
 * author: LIUluxi
 */
GatherThirdCtrl.$inject = ['Gather', 'AlertBox'];

function GatherThirdCtrl(Gather, AlertBox) {
    var vm = this;

    vm.dataList = null;
    vm.page = 1;
    vm.pageSize = 20;
    vm.total = 0;

    vm.refreshDataList = refreshDataList;

    refreshDataList();

    function refreshDataList() {
        Gather
            .getThird(vm)
            .success(function(response) {
                if(response.status === 0) {
                    vm.total = response.data.total;
                    vm.dataList = response.data.list;
                } else {
                    AlertBox.error(response.msg);
                }
            })
            .error(function(response) {
                AlertBox.error(response.msg);
            })
    }
}


LoginCtrl.$inject = ['$rootScope', 'Passport', 'AlertBox'];

function LoginCtrl($rootScope, Passport, AlertBox) {
    var vm = this;

    vm.username = '';
    vm.password = '';

    vm.submit = submit;

    /**
     * 提交登录表单
     */
    function submit() {
        Passport
            .login(vm)
            .success(function(response) {
                if(response.status === 0) {
                    $rootScope.$state.go('preview.home');
                } else {
                    AlertBox.error(response.msg);
                }
            });
    }
}


Ajax.$inject = ['$rootScope', '$http'];

function Ajax($rootScope, $http) {

    var prefix = '/ajax';

    return {
        doPost: doPost,
        doGet: doGet,
        doDelete: doDelete
    };

    function doPost(url, jsonParams) {
        return $http
            .post(
                prefix + url,
                _param(jsonParams),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }
            )
            .success(function(response) {
                if(response.status === 1001) {
                    $rootScope.$state.go('passport.login');
                }
            });
    }

    function doGet(url, jsonParams) {
        return $http
            .get(
                prefix + url,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }
            );
    }

    function doDelete(url) {
        return $http
            .delete(
            prefix + url,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }
        );
    }

    function _param(jsonParams) {
        var str = [];
        for (var key in jsonParams) {
            str.push(encodeURIComponent(key) + '=' + encodeURIComponent(jsonParams[key]));
        }

        return str.join('&');
    }
}


AlertBox.$inject = ['$timeout'];

function AlertBox($timeout) {

    return {
        success: success,
        error: error
    };

    function success(msg) {
        $('.J_success').show().find('span').text(msg);
        $timeout(function() {
            $('.J_success').hide();
        }, 2000);
    }

    function error(msg) {
        $('.J_error').show().find('span').text(msg);
        $timeout(function() {
            $('.J_error').hide();
        }, 2000);
    }
}

/*
 * 分析统计接口配置
 *
 * author: LIUluxi
 */

Analysis.$inject = ['Ajax'];

function Analysis(Ajax) {

    return {
        getRule: getRule,
        getTrade: getTrade,
        getWarning: getWarning
    };

    function getRule() {
        return Ajax.doGet('/statistic/rule');
    }

    function getTrade() {
        return Ajax.doGet('/statistic/fraud');
    }

    function getWarning() {
        return Ajax.doGet('/statistic/warning');
    }
}

/*
 * 交易检测接口配置
 *
 * author: LIUluxi
 */

Detect.$inject = ['Ajax'];

function Detect(Ajax) {

    return {
        detectTrade: detectTrade
    };

    function detectTrade() {
        return Ajax.doPost(
            '/check/importdata',
            {}
        );
    }
}

/*
 * 数据采集接口配置
 *
 * author: LIUluxi
 */

Gather.$inject = ['Ajax'];

function Gather(Ajax) {

    return {
        getBank: getBank,
        getThird: getThird
    };

    function getBank(vm) {
        return Ajax.doGet('/data/bank?page=' + vm.page + '&pageSize=' + vm.pageSize);
    }

    function getThird(vm) {
        return Ajax.doGet('/data/otherbank?page=' + vm.page + '&pageSize=' + vm.pageSize);
    }
}

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

/*
 * 名单管理接口配置
 *
 * author: LIUluxi
 */

List.$inject = ['Ajax'];

function List(Ajax) {

    return {
        getUserList: getUserList,
        modifyUser: modifyUser,
        getIpList: getIpList,
        modifyIp: modifyIp,
        addIp: addIp,
        deleteIp: deleteIp,
        getPhoneList: getPhoneList,
        modifyPhone: modifyPhone,
        addPhone: addPhone,
        deletePhone: deletePhone
    };

    function getUserList(vm) {
        return Ajax.doPost(
            '/usershow',
            {
                page: vm.page,
                pageSize: vm.pageSize
            }
        );
    }

    function modifyUser(vm) {
        return Ajax.doPost(
            '/usermanage/' + vm.userId,
            {
                id: vm.userId,
                usertype: vm.userType
            }
        );
    }

    function getIpList(vm) {
        return Ajax.doPost(
            '/ipshow',
            {
                page: vm.page,
                pageSize: vm.pageSize
            }
        );
    }

    function modifyIp(vm) {
        return Ajax.doPost(
            '/ipmanage/' + vm.ipId,
            {
                id: vm.ipId,
                safety: vm.safety
            }
        );
    }

    function addIp(vm) {
        return Ajax.doPost(
            '/ipmanage',
            {
                ipdata: vm.ipData,
                safety: vm.safety
            }
        );
    }

    function deleteIp(id) {
        return Ajax.doDelete(
            '/ipmanage/' + id,
            {
                id: id
            }
        );
    }

    function getPhoneList(vm) {
        return Ajax.doPost(
            '/phoneshow',
            {
                page: vm.page,
                pageSize: vm.pageSize
            }
        );
    }

    function modifyPhone(vm) {
        return Ajax.doPost(
            '/phonemanage/' + vm.phoneId,
            {
                id: vm.phoneId,
                safety: vm.safety
            }
        );
    }

    function addPhone(vm) {
        return Ajax.doPost(
            '/phonemanage',
            {
                phonenumber: vm.phone,
                safety: vm.safety
            }
        );
    }

    function deletePhone(id) {
        return Ajax.doDelete(
            '/phonemanage/' + id,
            {
                id: id
            }
        );
    }
}

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
        return Ajax.doGet('/models/' + id);
    }

    function del(id) {
        return Ajax.doDelete('/models/' + id);
    }
}


Passport.$inject = ['Ajax'];

function Passport(Ajax) {

    return {
        login: login,
        logout: logout
    };

    function login(vm) {
        return Ajax.doPost(
            '/login',
            {
                username: vm.username,
                password: vm.password
            }
        );
    }

    function logout() {
        return Ajax.doGet(
            '/logout',
            {}
        );
    }
}


Rule.$inject = ['Ajax'];

function Rule(Ajax) {

    return {
        list: list,
        add: add,
        getDetail: getDetail,
        modify: modify,
        del: del
    };

    function list(vm) {
        return Ajax.doGet('/rules?page=' + vm.page + '&pageSize=' + vm.pageSize);
    }

    function add(vm) {
        return Ajax.doPost(
            '/rules',
            {
                rulename: vm.ruleName,
                type: vm.type,
                safeLevel: vm.safeLevel,
                time: vm.time,
                deals: vm.deals,
                isCommonFromPlace: vm.isCommonFromPlace ? true : false
            }
        )
    }

    function getDetail(id) {
        return Ajax.doGet('/rules/' + id);
    }

    function modify(vm) {
        return Ajax.doPost(
            '/rules/' + vm.ruleId,
            {
                id: vm.ruleId,
                rulename: vm.ruleName,
                type: vm.type,
                safeLevel: vm.safeLevel,
                time: vm.time,
                deals: vm.deals,
                isCommonFromPlace: vm.isCommonFromPlace ? true : false
            }
        )
    }

    function del(id) {
        return Ajax.doDelete('/rules/' + id);
    }
}

/*
 * 模拟数据接口配置
 *
 * author: LIUluxi
 */

Simulate.$inject = ['Ajax'];

function Simulate(Ajax) {

    return {
        addNormal: addNormal,
        addFraud: addFraud
    };

    function addNormal(vm) {
        return Ajax.doPost(
            '/simulateNormal',
            {
                timeFrom: vm.timeFrom,
                timeTo: vm.timeTo,
                moneyFrom: vm.moneyFrom,
                moneyTo: vm.moneyTo,
                city: vm.city,
                amount: vm.amount,
                channel: vm.channel,
                serviceType: vm.serviceType,
                IP: vm.ip,
                state: vm.state,
                authMode: vm.authMode,
                terminalNumber: vm.terminalNumber,
                mac: vm.mac
            }
        );
    }

    function addFraud(vm) {
        return Ajax.doPost(
            '/simulateFraud',
            {
                fraudNumIdFrom: vm.fraudNumIdFrom,
                fraudNumIdTo1: vm.fraudNumIdTo1,
                fraudNumIdTo2: vm.fraudNumIdTo2,
                fraudTimeFrom: vm.fraudTimeFrom,
                fraudTimeTo: vm.fraudTimeTo,
                fraudMoneyFrom: vm.fraudMoneyFrom,
                fraudMoneyTo: vm.fraudMoneyTo,
                fraudNumCity: vm.fraudNumCity,
                timeRange: vm.timeRange,
                timeType: vm.timeType,
                percent: vm.percent,
                fraudChannel: vm.fraudChannel,
                fraudServiceType: vm.fraudServiceType,
                fraudIp: vm.fraudIp,
                fraudState: vm.fraudState,
                fraudAuthMode: vm.fraudAuthMode,
                fraudTerminalNumber: vm.fraudTerminalNumber,
                fraudMac: vm.fraudMac
            }
        );
    }
}

/*
 * 警报展示接口配置
 *
 * author: LIUluxi
 */

Warning.$inject = ['Ajax'];

function Warning(Ajax) {

    return {
        list: list
    };

    function list(vm) {
        return Ajax.doPost(
            '/datashow',
            {
                page: vm.page,
                pageSize: vm.pageSize,
                safety: vm.safety,
                safe_action: vm.safeAction,
                moneyint: 0
            }
        );
    }
}


angular
    .module('shyh')
    .directive('landingScrollspy', landingScrollspy);

function landingScrollspy() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.scrollspy({
                target: '.navbar-fixed-top',
                offset: 80
            });
        }
    };
}


angular
    .module('shyh')
    .directive('pageTitle', pageTitle);

function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = '上海银行 ｜ 交易监控平台';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = '上海银行 | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    };
}

/**
 * 第三方来源过滤器
 */
fromBankFilter.$inject = [];

function fromBankFilter() {
    var filter = function(input) {
        switch (input) {
            case 1: return '支付宝';
            case 2: return '微信';
            case 3: return '淘宝';
            case 4: return '京东';
            default: return '出错';
        }
    };

    return filter;
}

/**
 * 商品价格过滤器
 */
userTypeFilter.$inject = [];

function userTypeFilter() {
    var filter = function(input) {
        switch (input) {
            case 0: return '黑名单';
            case 1: return '白名单';
            case 2: return '灰名单';
            case 3: return '高风险帐号';
            default: return '出错';
        }
    };

    return filter;
}
