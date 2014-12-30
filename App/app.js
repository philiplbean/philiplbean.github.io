//Define an angular module for our app
var app = angular.module('myApp', []);

app.controller('tasksController', function($scope, $http, $window) {
 
  $scope.addTask = function (formdata) {
      $http.post("ajax/addTask.php?othername="+formdata.othername).success(function(data){
         //$scope.formdata = '';
	 
      });
      //$window.alert("User added successfully");
      $window.location.href='choose.php';
	
  };

   $scope.deleteTask = function (task) {
    if(confirm("Are you sure to delete this line?")){
    $http.post("ajax/deleteTask.php?taskID="+task).success(function(data){
        getTask();
      });
    }
  };

  $scope.toggleStatus = function(item, status, task) {
    if(status=='2'){status='0';}else{status='2';}
      $http.post("ajax/updateTask.php?taskID="+item+"&status="+status).success(function(data){
        getTask();
      });
  };

});
app.controller("loginController", function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

