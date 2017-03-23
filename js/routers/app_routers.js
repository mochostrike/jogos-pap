(function(){
	"use strict";
	angular.module("myApp").config(function($stateProvider, $urlRouterProvider){

		//$urlRouterProvider.otherwise("/menu/home");

	$urlRouterProvider.otherwise('/menu/jogos');

		$stateProvider

		.state("menu", {
			url:"/menu",
			templateUrl:"templates/menu.html",
			abstract: true,
			controller: 'initCtrl'
		})

	   .state('menu.jogos', {
	    url: '/jogos',
	    views: {
	      'side-menu21': {
	        templateUrl: 'templates/jogos.html',
	        
	      }
	    }
	  })

	   	  .state('menu.jogo', {
	    url: '/jogo',
	    views: {
	      'side-menu21': {
	        templateUrl: 'templates/jogo.html',
	        

	      }
	    }
	  })

/*		.state("menu.login", {
			url:"/login",
			views:{
				'menuContent':{
					templateUrl:"templates/login.html",
					controller: "initLogin"
				}
			}
		})
*/
		;


	});
})();
/*(function() 
{
	"use strict";

	angular.module("myApp").config(function ($stateProvider, $urlRouterProvider) {
		// body...
	
	$stateProvider
	   .state('menu.jogos', {
	    url: '/jogos',
	    views: {
	      'side-menu21': {
	        templateUrl: 'templates/jogos.html',
	        controller: 'jogosCtrl'
	      }
	    }
	  })

	  .state('menu.adicionar', {
	    url: '/jogo3',
	    views: {
	      'side-menu21': {
	        templateUrl: 'templates/adicionar.html',
	        controller: 'adicionarCtrl'
	      }
	    }
	  })

	  .state('menu.jogo', {
	    url: '/jogo',
	    views: {
	      'side-menu21': {
	        templateUrl: 'templates/jogo.html'

	      }
	    }
	  })

	  .state('menu', {
	    url: '/menu',
	    templateUrl: 'templates/menu.html',
	    controller: 'initCtrl'
	  })

	  .state('signup', {
	    url: '/page5',
	    templateUrl: 'templates/signup.html',
	    controller: 'signupCtrl'
	  });


$urlRouterProvider.otherwise('/menu/jogos');

	})
	
})();*/