var demo = angular.module('demo', ['ngRoute']);

demo.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        // .when('/',{
        //     templateUrl:'sum.html',
        //     controller:'main'
        // })
        .when('/sum', {
            templateUrl: 'routing/sum.html',
            controller: 'sum'
        })
        .when('/result/:a/:b', {
            templateUrl: 'routing/result.html',
            controller: 'result'
        })
        .when('/emp', {
            templateUrl: 'routing/emp.html',
            controller: 'emp'
        })
        .when('/addEmp',{
            templateUrl: 'routing/addEmp.html',
            controller:'addEmp'
        });
}]);

demo.controller('main', ['$scope', function ($scope) {

}]);
demo.controller('sum', ['$scope', function ($scope) {
    $scope.a = 0;
    $scope.b = 0;
}]);
demo.controller('result', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
    $scope.result = parseFloat($scope.a) + parseInt($scope.b);
}]);

demo.controller('emp', ['$scope', 'empService', function ($scope, empService) {

    $scope.empList = empService.empListService();
}]);

demo.controller('addEmp', ['$scope', 'empService',function ($scope, empService) {

    $scope.name='asdf';
    $scope.age='asdf';
    $scope.sal='asdf';

    $scope.addEmploye=function () {
        var empObj = {
             name: $scope.name,
             age: $scope.age,
             salary: $scope.sal
         };
         empService.addEmpService(JSON.parse(empObj));
    };
}]);