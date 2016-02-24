//Adding Application Madule 
var myApp = angular.module("myApp", []);

//Adding COntroller Modules
myApp.controller("myController", function($scope) {
   $scope.student = {
      firstName: "Twinkle",
      lastName: "Chawla",
      fees:10000,
      
      subjects:[
         {name:'DAA',marks:70},
         {name:'AOS',marks:80},
         {name:'TOC',marks:65},
         {name:'ESD',marks:75},
         {name:'JAVA',marks:67}
      ],
      
      fullName: function() {
         var studentObject;
         studentObject = $scope.student;
         return studentObject.firstName + " " + studentObject.lastName;
      }
   };
}); 

//Using the above Modules
<div ng-app = "myApp" ng-controller = "myController">
   ...
   <script src = "myApp.js"></script>
   <script src = "myController.js"></script>
	
</div>