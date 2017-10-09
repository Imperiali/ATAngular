angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('CachorroCtrl', function($scope){
  $scope.titulo = "Aqui tem detalhes"
  
  $scope.animais = [{
    "id":"1",
    "nome":"Thor",
    "descricao":"bla bla bla bla bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla bla",
    "contato":"123456789",
    "imagem":"http://lorempixel.com/300/150/animals/55"
  }]
  
})

.controller('CachorrosCtrl', function($scope){
  $scope.animais = [{
    "id":"1",
    "nome":"Thor",
    "descricao":"bla bla bla bla bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla bla",
    "contato":"123456789",
    "imagem":"http://lorempixel.com/300/150/animals/55"
  },
  {
    "id":"2",
    "nome":"Loki",
    "descricao":"bla bla bla bla bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla bla",
    "contato":"123456789",
    "imagem":"http://lorempixel.com/300/150/animals/55"
  },
  {
    "id":"3",
    "nome":"Odin",
    "descricao":"bla bla bla bla bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla bla",
    "contato":"123456789",
    "imagem":"http://lorempixel.com/300/150/animals/55"
  },
  {
    "id":"4",
    "nome":"Feir",
    "descricao":"bla bla bla bla bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla bla",
    "contato":"123456789",
    "imagem":"http://lorempixel.com/300/150/animals/55"
  }];
})

.controller('GatosCtrl', function($scope){
  $scope.animais = [];
})

.controller('PerfilCtrl', function($scope){
  
});
