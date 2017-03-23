(function() {
	"use strict";

	angular.module("myApp").controller("initCtrl", function($scope, Dados, $location ){
		$scope.home = "Jogos";
		$scope.myswipe = true;

		$scope.porra = "nao";
		$scope.jogos = [];


		var getDados = function() {
			var  params = {
				counter: $scope.jogos.length,
		 		token:"1f3d2gs3f2fg3as2fdg3re2t1we46er45"
			};
			Dados.getDados(params).success(function  (data) {
				$scope.jogos=data;
			}).error(function  (data) {
				console.log(data);
			});
		};
		getDados();

			$scope.dadosJogo = function(id) {

				$scope.oJogo = $scope.jogos.filter(function(element) {
					console.log("porra");
					$scope.porra="ergghh";
				return element.id == id;
			});

			console.log($scope.oJogo);
			$location.path("/menu/jogo");

		};
 

	});
})();
/*(function() 
{
	"use strict";

	angular.module("myApp")

	
	.controller('jogosCtrl', ['$scope', '$stateParams', 'Dados', '$location',	 // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
	// You can include any angular dependencies as parameters for this function
	// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams, Dados, $location) {
		$scope.home = "Jogos";
		$scope.oJogo = [];

		$scope.myswipe = true;
		$scope.jogos = [];


		var getDados = function() {
			var  params = {
				counter: $scope.jogos.length,
		 		token:"1f3d2gs3f2fg3as2fdg3re2t1we46er45"
			};
			Dados.getDados(params).success(function  (data) {
				$scope.jogos=data;
			}).error(function  (data) {
				console.log(data);
			});
		};
		getDados();

			$scope.dadosJogo = function(id) {
			$scope.oJogo = $scope.jogos.filter(function(element) {
				return element.id == id;
			});
			console.log($scope.oJogo);
			$location.path("/menu/jogo");
		};


	}])
	   
	.controller('adicionarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
	// You can include any angular dependencies as parameters for this function
	// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams) {


	}])
	   
	.controller('jogoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
	// You can include any angular dependencies as parameters for this function
	// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams, Dados, $location) {



	}])
	   
	.controller('menuCtrl', ['$scope', '$stateParams', 'Dados', '$location',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
	// You can include any angular dependencies as parameters for this function
	// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams) {


	}])
	.controller('initCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
	// You can include any angular dependencies as parameters for this function
	// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams) {


	}])
	.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
	// You can include any angular dependencies as parameters for this function
	// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams) {


	}]);
})();*/