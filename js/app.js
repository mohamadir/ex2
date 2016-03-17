var app=angular.module("app",['ngRoute']);

app.controller("submitCtrl",function($scope){

    
    $scope.submitForm=function(){
               alert("hihi")};  
	});         
               

               
            

		
	



app.config(function($routeProvider){$routeProvider
.when('/', {
    templateUrl: "home.html"})
.when('/about', {
    templateUrl: "about.html"
    


})
.when('/contact', {
    templateUrl: "contact.html"
    

})
.otherwise({
    redirectTo : "/"
});
});