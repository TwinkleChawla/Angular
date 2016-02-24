//Loading the framwork
<script src = "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js">
</script>


//ng-app initializes the app
<div ng-app = "">
	//ng-model gives a model name
    <p>Name: <input type = "text" ng-model = "name"></p>
    <p>Hello <span ng-bind = "name"></span>!</p>
</div>

//ng-init initializes the data 
<div ng-app = "" ng-init = "countries = [{locale:'en-US',name:'United States'}, {locale:'en-GB',name:'United Kingdom'}, {locale:'en-FR',name:'France'}]"> 
         <p>Enter your Name: <input type = "text" ng-model = "name"></p>
         <p>Hello <span ng-bind = "name"></span>!</p>
         <p>List of Countries with locale:</p>
      
         <ol>
         	//ng-repeat works as for loop
            <li ng-repeat = "country in countries">
               {{ 'Country: ' + country.name + ', Locale: ' + country.locale }}
            </li>
         </ol>
</div>