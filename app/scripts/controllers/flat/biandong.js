'use strict';
angular.module('flatpcApp')
.controller('staffvariationCtrl', ['$scope','$rootScope','AppConfig',function($scope,$rootScope,AppConfig) {
        //存储列表头到frame.html中
    $scope.menus = [
        '公寓管理','公寓管理','人员变动记录'
    ];
    //跳转到什么地方去
    $scope.parent = "flat";
    $scope.loaded = function(){
        $rootScope.loading = false;
        $scope.$apply();
    }
    var a = document.createElement('a');
    a.href ="http://baidu.com";
    a.target="page-frame";
    a.click();
}]);