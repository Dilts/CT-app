var videos = angular.module( "videos", [] );


function userController($scope) {
	$scope.name = '';
	$scope.url = '';
	$scope.title = '';
	$scope.desc = '';
	$scope.users = [
	{id:1, name:'Brian',  url:"http://www.youtube.com/watch?v=YS6KWs4XSvI", title:"funny cats", desc:"a silly cat does silly stuff" },
	{id:2, name:'Guy',  url:"http://www.youtube.com/watch?v=GXwq8UpTHTo", title:"stupid cats", desc:"a funny cat falls over" },
	];
	$scope.edit = true;
	$scope.error = false;
	$scope.incomplete = false; 


$scope.editUser = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.name = '';
    $scope.url = '';
    $scope.title = '';
	$scope.desc = '';
    } else {
    $scope.edit = false;
    $scope.name = $scope.users[id-1].name;
    $scope.url = $scope.users[id-1].url; 
    $scope.title = $scope.users[id-1].title; 
    $scope.desc = $scope.users[id-1].desc; 
  }
};

	$scope.$watch('desc',function() {$scope.test();});
	$scope.$watch('title',function() {$scope.test();});
	$scope.$watch('url', function() {$scope.test();});
	$scope.$watch('name', function() {$scope.test();});

	$scope.test = function() {
	  // if ($scope.passw1 !== $scope.passw2) {
	  //   $scope.error = true;
	  //   } else {
	  //   $scope.error = false;
	  // }
	  $scope.incomplete = false;
	  if ($scope.edit && (!$scope.name.length ||
	  !$scope.url.length ||
	  !$scope.title.length || !$scope.desc.length)) {
	       $scope.incomplete = true;
	  }
	};

}