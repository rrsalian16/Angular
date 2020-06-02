demo.service('empService',['$http', function ($http) {

    var self=this;
    this.emplist=[];
    this.empListService=function () {
        $http.get('http://dummy.restapiexample.com/api/v1/employees')
            .success(function (responseData) {
                self.emplist = responseData;
            })
            .error(function (data, status) {
                alert('Error!!!');
            });
        return self.emplist;
    };

    this.addEmpService=function (empData) {
        $http.post('http://dummy.restapiexample.com/api/v1/create',empData)
        .success(function (responseData) {
            console.log("Post is successful");
            console.log(responseData);
        })
        .error(function (a,b,c,d) {
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(d);
            alert('Error while adding Employee!!!!');
        });
    };
    
}]);