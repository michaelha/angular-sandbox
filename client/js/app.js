var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http){
    
    $scope.handle = 'haha';
    $scope.doStuff = function() {
        // alert('haha');
        var dataObj = {
				first_name : 'michael',
				last_name : 'ha'
		};	
        var res = $http.post('/test_post', dataObj);
        res.then(function successCallback(data){
            console.info(data.data.firstname);
            $scope.handle = data.data.firstname;
        }, function errorCallback() {
            console.warn('some error!');
        });
    }
    
}]);