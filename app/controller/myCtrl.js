(function(){
	var app=angular.module("app",[]);
	app.controller("myCtrl",myCtrl);
function myCtrl($scope,$http){
	$scope.searchName="";
	$scope.searchM="";
	$scope.sshow=false;
	$scope.eBack = function() {
  window.history.back();
};
    
	$scope.getActors=function(){
		var promise=$http.get("http://api.themoviedb.org/3/search/person?api_key=f24727bdb915ca05f7718876104b211d&query="+$scope.searchName);
		promise.then(sucessCallback);
		function sucessCallback(response){
			$scope.results=response.data.results;
		}
	};
	
	$scope.getMovies=function(){
		var promise=$http.get("http://api.themoviedb.org/3/search/movie?api_key=f24727bdb915ca05f7718876104b211d&query="+$scope.searchM);
		promise.then(sucessCallback);
		function sucessCallback(response){
			$scope.results1=response.data.results;
		}
	};	
	$scope.getMoviesById = function(id) {
$scope.ddc=id;
var promise = $http.get("http://api.themoviedb.org/3/person/"+$scope.ddc+"/movie_credits?api_key=f24727bdb915ca05f7718876104b211d");
promise.then(sucessCallback)
function sucessCallback(response) {
$scope.cast = response.data.cast;
$scope.sshow=true;
}}

};
		app.directive('myfd',function(){
		return{
			templateUrl:"template/new.html",
			restrict:"E"
		}
		
		
	})	
	
	
	
	
	
})();
