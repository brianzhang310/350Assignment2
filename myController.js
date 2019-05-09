const angular  = window.angular;
var app = angular.module("myApp", []);

app.controller("myController", function($scope) {
  $scope.names = ["John","Doe","Brian","Lisa","Erin","XiaoDangJia"];
  $scope.titles = ["Make 1","Stop","Design shit","Nm$L","cxk出来打球","我佛了"]
  var task5=[];
  var task4=[];
  var task3=[];
  var task2=[];
  var task1=[];
  var task6=[];
  $scope.tasks = [task1,task2,task3,task4,task5,task6];
  $scope.dates = ["June 36","Dec 1","Dec 2","Dec 5","July 6","August 9"];
  
  for(var i = 0;i<6;i++){
    $scope.tasks[i].title = '';
    $scope.tasks[i].dates = '';
    $scope.tasks[i].person = '';
    $scope.tasks[i].title = $scope.titles[i];
    $scope.tasks[i].dates = $scope.dates[i];
    $scope.tasks[i].person = $scope.names[i];
  }
  $scope.TodoList = [$scope.tasks[0],$scope.tasks[2]];
  $scope.DoingList = [$scope.tasks[3],$scope.tasks[4]];
  $scope.DoneList = [$scope.tasks[5],$scope.tasks[1]];






});

