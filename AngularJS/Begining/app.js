var app = angular.module("app", []);

app.controller("student", ["$scope","$http", function ($scope,$http) {
    $scope.std=[];
    $scope.id;

    $http.get("http://localhost:8080/api/student")
    .success(function (result) {
        $scope.std=result;
    })
    .error(function (result) {
        alert("error!!!!!!!!!!");
    });

    $scope.getById=function()  {
        $http.get("http://localhost:8080/api/student/"+$scope.id)
        .success(function(result){
            $scope.sid=result;
            console.log(result);
            console.log($scope.id);
        })
        .error(function (data) {
            console.log(data);
            alert("error!!!");
        });
    };

    $scope.create=function () {
        console.log("create");
        $http.post("http://localhost:8080/api/student",
            { name: $scope.name, email: $scope.email})
         .success(function (result) {
             $scope.std=result;
         })
         .error(function (datat) {
             alert("error!!!!!");
         });
    };
    
}]) ;