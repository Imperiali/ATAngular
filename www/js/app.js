angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', "ngResource"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
  })

  .state('app.cachorros', {
    url: '/cachorros',
    views: {
      'menuContent': {
        templateUrl: 'templates/listaanimais.html',
        controller: 'CachorrosCtrl'
      }
    }
  })
  
  .state('app.cachorro', {
    url: '/cachorro/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/animal.html',
        controller: 'CachorroCtrl'
      }
    }
  })

  .state('app.gatos', {
      url: '/gatos',
      views: {
        'menuContent': {
          templateUrl: 'templates/listaanimais.html',
          controller: 'GatosCtrl'
        }
      }
    })
    
  .state('app.gato', {
    url: '/gato/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/animal.html',
        controller: 'GatoCtrl'
      }
    }
  })
  
  .state('app.outros', {
      url: '/outros',
      views: {
        'menuContent': {
          templateUrl: 'templates/listaanimais.html',
          controller: 'OutrosCtrl'
        }
      }
    })
    
  .state('app.outro', {
    url: '/outro/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/animal.html',
        controller: 'OutroCtrl'
      }
    }
  })
  
  .state('app.perfil', {
    url: '/perfil',
    views: {
      'menuContent': {
        templateUrl: 'templates/perfil.html',
        controller: 'PerfilCtrl'
      }
    }
  })
  .state('app.cadanimal', {
    url: '/cadanimal',
    views: {
      'menuContent': {
        templateUrl: 'templates/cadanimal.html',
        controller: 'CadAnimalCtrl'
      }
    }
  })
  .state('app.cadastro', {
    url: '/cadastro',
    views: {
      'menuContent': {
        templateUrl: 'templates/cadastro.html',
        controller: 'CadUsuarioCtrl'
      }
    }
  })
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
