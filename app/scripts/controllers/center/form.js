'use strict';

/**
 * @ngdoc function
 * @name flatpcApp.controller:formCtrl
 * @description
 * # formCtrl
 * Controller of the flatpcApp
 */
angular.module('flatpcApp')
.controller('formCtrl', ['$scope','$rootScope','AppConfig',function($scope,$rootScope,AppConfig) {
        //存储列表头到frame.html中
    $scope.menus = [
        '用户中心','认证方式'
    ];
    //跳转到什么地方去
    $scope.parent = "data";
    $rootScope.loading = false;
    var a = document.createElement('a');
    a.href =AppConfig.UCENTER+"/index.php?m=Admin&c=Index&a=config&schoolcode="+AppConfig.schoolCode+"&token="+AppConfig.token;
    a.target="page-frame";
    a.click();
}]);