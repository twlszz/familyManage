App.controller("userManageCtrl",["$scope","NgTableParams","$http","toaster","$modal",function($scope,NgTableParams,$http,toaster,$modal){

    //初始化NgTableParams
    $scope.userList=new NgTableParams({
        page:1,
        count:10
    },{
        total:0,
        //获取用户列表数据
        getData:function($defer,params){
            $http({
                method:"POST",
                //url:"server/home/user/userManage.json"
                url:"http://server.hui2020.com/TP5/public/",
                params :{
                    act:"getMyMemb",
                    userName:"szz",
                    pwd:"55a147df0e2b5cf9fe35f90ddda85d85",
                    userId:"32296",
                    pageSize:10,
                    pageIdx:0,
                    keyword:undefined,
                    type:undefined,
                }
            }).success(function(response){
                $defer.resolve(response.mdata);
            }).error(function(){

            });

        }
    });


    //添加用户
    $scope.addUser=function(){
        window.alert("用ngDialog控件试试实现模态框的弹出");
    }

    //删除用户
    $scope.deleteUser=function(){

    }

    //修改用户
    $scope.modifyUser=function(){

    }

}]);