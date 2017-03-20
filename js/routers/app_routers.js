(function() 
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
	    url: '/jogo',
	    views: {
	      'side-menu21': {
	        templateUrl: 'templates/adicionar.html',
	        controller: 'adicionarCtrl'
	      }
	    }
	  })

	  .state('menu.cloud', {
	    url: '/page3',
	    views: {
	      'side-menu21': {
	        templateUrl: 'templates/cloud.html',
	        controller: 'cloudCtrl'
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
	
})();