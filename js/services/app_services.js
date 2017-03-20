(function() 
{
	"use strict";

	angular.module("myApp").service("Dados", function($http){
		this.getDados = function(params){

			return $http({
				method:"POST",
				url:"http://esffpap.xyz/teste/api/jogos.php",
				data:params,
				headers:{

					'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
				}

			});
		}
	});

})();