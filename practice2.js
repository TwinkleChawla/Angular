//Adding and using controllers 
<html>
   <head>
      <title>Controller</title>
      <script src = "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
   </head>
   <body> 
      <div ng-app = "myApp" ng-controller = "myController">
         Enter first name: <input type = "text" ng-model = "student.firstName"><br><br>
         Enter last name: <input type = "text" ng-model = "student.lastName"><br>
         <br>   
         You are entering: {{student.fullName()}}
      </div>
       <script>
         var myApp = angular.module("myApp", []);
         
         myApp.controller('myController', function($scope) {
            $scope.student = {
               firstName: "Mahesh",
               lastName: "Parashar",
               
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
            };
         });
      </script>     
   </body>
</html>