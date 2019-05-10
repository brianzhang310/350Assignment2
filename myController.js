const angular  = window.angular;
var app = angular.module("myApp", []);

app.controller("myController", function($scope) {
  $scope.names = ["John","Doe","Brian","Lisa","Erin","XiaoDangJia"];
  $scope.titles = ["Make 1","Stop","Design good","Nm$L","cxk出来打球","我佛了"]
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
    $scope.tasks[i].date = $scope.dates[i];
    $scope.tasks[i].person = $scope.names[i];
  }
  $scope.TodoList = [$scope.tasks[0],$scope.tasks[2],$scope.tasks[4],$scope.tasks[5]];
  $scope.DoingList = [$scope.tasks[3],$scope.tasks[4],$scope.tasks[2],$scope.tasks[0]];
  $scope.DoneList = [$scope.tasks[5],$scope.tasks[1],$scope.tasks[3]];

  $scope.chatbox={};
  $scope.chatbox.style={};

  $scope.chatbox.style.display='none';
  
  $scope.closeForm =  function()  {
    $scope.chatbox.style.display = "none";
  };
  $scope.filemanager={};
  $scope.filemanager.style={};
  $scope.filemanager.style.display='none';
  
  $scope.closeFile =  function()  {
    $scope.filemanager.style.display = "none";
  };


  $scope.toggleForm =  function() {
    display1 = $scope.chatbox.style.display;
    display2 = $scope.filemanager.style.display;
    if(display1=="none"&&display2=="none"){
      $scope.chatbox.style.display = "block";
    }else if(display1=="none"&&display2=="block"){
      $scope.chatbox.style.display = "block";
      $scope.filemanager.style.display = "none";
    }
    else if(display1=="block"){ 
      $scope.chatbox.style.display = "none";
    }
    else{
      $scope.chatbox.style.display = "block";
    }
  };
  $scope.toggleFile =  function() {
    display1 = $scope.filemanager.style.display;
    display2 = $scope.chatbox.style.display;
    if(display1=="none"&&display2=="none"){
      $scope.filemanager.style.display = "block";
    }else if(display1=="none"&&display2=="block"){
      $scope.chatbox.style.display = "none";
      $scope.filemanager.style.display = "block";
    }
    else if(display1=="block"){ 
      $scope.filemanager.style.display = "none";
    }
    else{
      $scope.filemanager.style.display = "block";
    }
  };

  $scope.addNewTask = function(){
    $uimodal.open({
      templateurl:'new.html',
      controller: 'newController'
    })
  }


});

