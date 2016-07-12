// 'use strict';

// /**
//  * @ngdoc function
//  * @name flatpcApp.controller:AboutCtrl
//  * @description
//  * # AboutCtrl
//  * Controller of the flatpcApp
//  */
// angular.module('flatpcApp')
//   .controller('LoginCtrl',['$scope', 'PublicService','$rootScope','AppConfig','$location','authority','$state',
//   function($scope, PublicService,$rootScope,AppConfig,$location,authority,$state) {
//     //   console.log($state);
//         switch($state.current.name){
//             case 'nbdx':
//                 AppConfig.college = '宁波大学';
//                 break;
//             case 'hzsf':
//                 AppConfig.college = '湖州师范学院';
//                 break;
//             case 'cslg':
//                 AppConfig.college = '长沙理工大学';
//                 break;
//             case 'sqxy':
//                 AppConfig.college = '新乡医学院三全学院';
//                 break;
//             case 'sxwl':
//                 AppConfig.college = '绍兴文理学院';
//                 break;
            
//         }
    
//         AppConfig.college = AppConfig.college || '公寓管理系统';
//         $rootScope.loginSwitch = false;
//         $scope.media = {
//             user:localStorage.username || "",
//             pass:'',
//             code:'',
//             rem:localStorage.remember?true:false,
//             sessionid:'',
//             college:AppConfig.college
//         }
//         /*PublicService.session({
//             useraccount:$scope.media.user,
//             password:$scope.media.pass,
//             code:$scope.media.code
//         }).success(function (data) {
//             $rootScope.loading = false;
//             if(data.code == 0){
//                 $scope.media.img =  'http://120.55.84.193/Geese_Apartment/public/login/get_code/?sessionid=' + data.data.sessionid;
//                 $scope.media.sessionid =  data.data.sessionid;
//             }
//             else
//                 swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
//         })*/
//         var lo = 0;
//         $rootScope.loading = false;
//         $scope.login = function () {
//             if($scope.media.user.length > 0 && $scope.media.pass.length > 0 /*&& $scope.media.code.length > 0*/){
//                 $rootScope.loading = true;
//                 PublicService.login({
//                     useraccount:$scope.media.user,
//                     password:$scope.media.pass,
//                     code:$scope.media.code || '',
//                     sessionid:$scope.media.sessionid || ''
//                 }).success(function (data) {
                    
//                     if(data.code == 0){
//                         sessionStorage.adminId = data.data.adminId;
//                         sessionStorage.token = data.data.token;
//                         sessionStorage.nodeIds = data.data.nodeIds;
//                         sessionStorage.schoolCode = data.data.schoolCode;
//                         sessionStorage.userName = data.data.userName;
//                         sessionStorage.roleName = data.data.roleName;
//                         sessionStorage.roleId = data.data.roleId;
//                         sessionStorage.userAccount = data.data.userAccount;
//                         sessionStorage.isOpenBed = data.data.isOpenBed;
                        
//                         sessionStorage.week = data.data.week;
//                         sessionStorage.month = data.data.month;
//                         sessionStorage.day = data.data.day;
//                         sessionStorage.bed = data.data.bed;
//                         sessionStorage.pass = data.data.pass;
//                         sessionStorage.photo = data.data.photo;
//                         sessionStorage.role = data.data.role;
//                         sessionStorage.takephoto = data.data.takephoto;
//                         sessionStorage.check = data.data.check;
//                         if($scope.media.rem){
//                             localStorage.username = $scope.media.user;
//                             localStorage.remember = 1;
//                         }
//                         else {
//                             localStorage.username = "";
//                             localStorage.remember = 0;
//                         }
                        
//                         // if(AppConfig.adminId && AppConfig.token && AppConfig.nodeIds && AppConfig.schoolCode && AppConfig.userName && AppConfig.roleName && AppConfig.roleId && AppConfig.userAccount){
//                         //     $location.path('/index');
//                         //     $rootScope.loginSwitch = true;
//                         // }
//                         if(authority.check()){
//                             $rootScope.treeFlat = undefined;
//                             $rootScope.treeCollege = undefined;
//                             $rootScope.treeTerm = undefined;
//                             $rootScope.treeGrade = undefined;
//                             $rootScope.treeType = undefined;
//                             $rootScope.treeGroup = undefined;
//                             $rootScope.treeMenu = undefined;
//                             $rootScope.treeRule = undefined;
//                             $rootScope.treeDay = undefined;
//                             $rootScope.treeSpot = undefined;
//                             $rootScope.treeMonth = undefined;
//                             $rootScope.treeMenu = undefined;
//                             $rootScope.treeRule = undefined;
                            
//                             var form = document.createElement("form");
//                             form.target = "test";
//                             form.method = "post";
//                             // form.action = "http://www.houqinbao.com/index.php?s=/Home/User/login.html";
//                             form.action = "/index.php?s=/Home/User/login.html";
//                             var input1 = document.createElement("input"),input2 = document.createElement("input");
//                             input1.name = "username";
//                             input1.value = $scope.media.user;
                            
//                             input2.name = "password";
//                             input2.value = $scope.media.pass;
                            
//                             form.appendChild(input1);
//                             form.appendChild(input2);
                            
//                             form.submit();
                            
                            
//                             document.getElementById("login-frame").onload = function () {
//                                 if(lo == 1){
//                                     login();
//                                 }
//                                 lo++;
//                             }
                            
//                         }
                        
//                     }
//                     else{
//                         $rootScope.loading = false;
//                         swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
//                     }
                        
//                 })
//             }
            
//         };
//         function login() {
//             PublicService.loginMessage({
//                 account:$scope.media.user,
//                 password:$scope.media.pass
//             }).success(function (data) {
//                 $rootScope.loading = false;
//                 $rootScope.loginSwitch = true;
//                 location.href = '#index';
//                 if(data.code == 0){
//                     // sessionStorage.staffkey = data.data.staffkey;
//                     sessionStorage.tokenMessage = data.data.token;
//                     sessionStorage.schoolCode = data.data.schoolcode;
//                     sessionStorage.schoolname = data.data.schoolname || 'test';
//                     sessionStorage.roleName = data.data.rolename;
                    
//                     // AppConfig.staffkey = data.data.staffkey;
//                     AppConfig.token = data.data.token;
//                     AppConfig.schoolCode = data.data.schoolcode;
//                     AppConfig.schoolname = data.data.schoolname || 'test';
//                     AppConfig.roleName = data.data.rolename;
//                 }
//             })
//         }
//     }]);
'use strict';

/**
 * @ngdoc function
 * @name flatpcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flatpcApp
 */
angular.module('flatpcApp')
  .controller('LoginCtrl',['$scope', 'PublicService','$rootScope','AppConfig','$location','authority','$state',
  function($scope, PublicService,$rootScope,AppConfig,$location,authority,$state) {
    //   console.log($state);
        switch($state.current.name){
            case 'nbdx':
                AppConfig.college = '宁波大学';
                break;
            case 'hzsf':
                AppConfig.college = '湖州师范学院';
                break;
            case 'cslg':
                AppConfig.college = '长沙理工大学';
                break;
            case 'sqxy':
                AppConfig.college = '新乡医学院三全学院';
                break;
            case 'sxwl':
                AppConfig.college = '绍兴文理学院';
                break;
            
        }
    
        AppConfig.college = AppConfig.college || '公寓管理系统';
        $rootScope.loginSwitch = false;
        $scope.media = {
            user:localStorage.username || "",
            pass:'',
            code:'',
            rem:localStorage.remember?true:false,
            sessionid:'',
            college:AppConfig.college
        }
        /*PublicService.session({
            useraccount:$scope.media.user,
            password:$scope.media.pass,
            code:$scope.media.code
        }).success(function (data) {
            $rootScope.loading = false;
            if(data.code == 0){
                $scope.media.img =  'http://120.55.84.193/Geese_Apartment/public/login/get_code/?sessionid=' + data.data.sessionid;
                $scope.media.sessionid =  data.data.sessionid;
            }
            else
                swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
        })*/
        $rootScope.loading = false;
        $scope.login = function () {
            if($scope.media.user.length > 0 && $scope.media.pass.length > 0 /*&& $scope.media.code.length > 0*/){
                $rootScope.loading = true;
                PublicService.login({
                    useraccount:$scope.media.user,
                    password:$scope.media.pass,
                    code:$scope.media.code || '',
                    sessionid:$scope.media.sessionid || ''
                }).success(function (data) {
                    
                    if(data.code == 0){
                        sessionStorage.adminId = data.data.adminId;
                        sessionStorage.token = data.data.token;
                        sessionStorage.nodeIds = data.data.nodeIds;
                        sessionStorage.schoolCode = data.data.schoolCode;
                        sessionStorage.userName = data.data.userName;
                        sessionStorage.roleName = data.data.roleName;
                        sessionStorage.roleId = data.data.roleId;
                        sessionStorage.userAccount = data.data.userAccount;
                        sessionStorage.isOpenBed = data.data.isOpenBed;
                        
                        sessionStorage.week = data.data.week;
                        sessionStorage.month = data.data.month;
                        sessionStorage.day = data.data.day;
                        sessionStorage.bed = data.data.bed;
                        sessionStorage.pass = data.data.pass;
                        sessionStorage.photo = data.data.photo;
                        sessionStorage.role = data.data.role;
                        sessionStorage.takephoto = data.data.takephoto;
                        sessionStorage.check = data.data.check;

                        document.cookie = "adminId="+data.data.adminId;
                        document.cookie = "token="+data.data.token;
                        document.cookie = "nodeIds="+data.data.nodeIds;
                        document.cookie = "schoolCode="+data.data.schoolCode;
                        document.cookie = "userName="+data.data.userName;
                        document.cookie = "roleName="+data.data.roleName;
                        document.cookie = "roleId="+data.data.roleId;
                        document.cookie = "userAccount="+data.data.userAccount;
                        document.cookie = "isOpenBed="+data.data.isOpenBed;
                        document.cookie = "week="+data.data.week;
                        document.cookie = "month="+data.data.month;
                        document.cookie = "day="+data.data.day;
                        document.cookie = "bed="+data.data.bed;
                        document.cookie = "pass="+data.data.pass;
                        document.cookie = "photo="+data.data.photo;
                        document.cookie = "role="+data.data.role;
                        document.cookie = "takephoto="+data.data.takephoto;
                        document.cookie = "check="+data.data.check;
                        if($scope.media.rem){
                            localStorage.username = $scope.media.user;
                            localStorage.remember = 1;
                        }
                        else {
                            localStorage.username = "";
                            localStorage.remember = 0;
                        }
                        
                        // if(AppConfig.adminId && AppConfig.token && AppConfig.nodeIds && AppConfig.schoolCode && AppConfig.userName && AppConfig.roleName && AppConfig.roleId && AppConfig.userAccount){
                        //     $location.path('/index');
                        //     $rootScope.loginSwitch = true;
                        // }
                        if(authority.check()){
                            $rootScope.treeFlat = undefined;
                            $rootScope.treeCollege = undefined;
                            $rootScope.treeTerm = undefined;
                            $rootScope.treeGrade = undefined;
                            $rootScope.treeType = undefined;
                            $rootScope.treeGroup = undefined;
                            $rootScope.treeMenu = undefined;
                            $rootScope.treeRule = undefined;
                            $rootScope.treeDay = undefined;
                            $rootScope.treeSpot = undefined;
                            $rootScope.treeMonth = undefined;
                            $rootScope.treeMenu = undefined;
                            $rootScope.treeRule = undefined;
                            
                            var form = document.createElement("form");
                            form.target = "test";
                            form.method = "post";
                            form.action = "/index.php?s=/Home/User/login.html";
                            var input1 = document.createElement("input"),input2 = document.createElement("input");
                            input1.name = "username";
                            input1.value = $scope.media.user;
                            
                            input2.name = "password";
                            input2.value = $scope.media.pass;
                            
                            form.appendChild(input1);
                            form.appendChild(input2);
                            
                            form.submit();
                            
                            login();
                        }
                        
                    }
                    else
                        swal("提示","错误代码："+ data.code + '，' + data.msg, "error"); 
                })
            }
            
        };
        function login() {
            PublicService.loginMessage({
                account:$scope.media.user,
                password:$scope.media.pass
            }).success(function (data) {
                $rootScope.loading = false;
                $rootScope.loginSwitch = true;
                location.href = '#index';
                if(data.code == 0){
                    // sessionStorage.staffkey = data.data.staffkey;
                    sessionStorage.tokenMessage = data.data.token;
                    sessionStorage.schoolCode = data.data.schoolcode;
                    sessionStorage.schoolname = data.data.schoolname || 'test';
                    sessionStorage.roleName = data.data.rolename;
                    
                    // AppConfig.staffkey = data.data.staffkey;
                    AppConfig.token = data.data.token;
                    AppConfig.schoolCode = data.data.schoolcode;
                    AppConfig.schoolname = data.data.schoolname || 'test';
                    AppConfig.roleName = data.data.rolename;
                }
            })
        }
    }]);
