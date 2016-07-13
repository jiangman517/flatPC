'use strict';

/**
 * @ngdoc function
 * @name flatpcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flatpcApp
 */
angular.module('flatpcApp')
.controller('UserListCtrl', ['$scope','$rootScope','AppConfig',function($scope,$rootScope,AppConfig) {
        //存储列表头到frame.html中
    $scope.menus = [
        '数据中心','用户中心','用户列表'
    ];
    //跳转到什么地方去
    $scope.parent = "data";
    $rootScope.loading = false;
    var a = document.createElement('a');
    a.href =AppConfig.UCENTER+"/index.php?m=Admin&c=Index&a=index&schoolcode="+AppConfig.schoolCode+"&token="+AppConfig.token;
    a.target="page-frame";
    a.click();
}]);