angular.module('starter.controllers', ['ngMap'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, Auth, $rootScope) {

  var checaLogin = localStorage.getItem("user");
  if (checaLogin && checaLogin.length > 0){
    $rootScope.estaLogado = true;
  };
  $scope.loginData = {};
  
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  
  $scope.login = function() {
    $scope.modal.show();
  };
  
  $scope.doLogin = function() {
    Auth.verificaLogin($scope.loginData).then(ret => {
      console.log("voltei com:");
      console.log(ret);
      $rootScope.estaLogado = true;
      Auth.salvaLocalStorage("user",JSON.stringify(ret.data));
    });
    console.log('Doing login', $scope.loginData);
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  
  $scope.logout = function () {
    $rootScope.estaLogado = false;
    localStorage.removeItem("user");
  };
})

.controller('CachorroCtrl', function($scope, $stateParams, AnimAPI, $state){
  
  var idAnimal = $stateParams.id;
  
  console.log(idAnimal);
  AnimAPI.query({id: idAnimal}, function(anim){
    $scope.animal = anim.data;
    $scope.titulo = anim.data.nome;
    console.log(anim);
  })
})

.controller('CachorrosCtrl', function($scope, AnimAPI){
  
  $scope.titulo = "Cachorros";
  
  $scope.tipo = "cachorro";
  
   AnimAPI.query(function (anim){
    $scope.animais = anim.data;
  });
})

.controller('GatosCtrl', function($scope, AnimAPI){
  $scope.titulo = "Busca por Gato"
  
   $scope.tipo = "gato";
  
  AnimAPI.query(function (anim){
    $scope.animais = anim.data;
  });
})

.controller('GatoCtrl', function($scope, AnimAPI, $state, $stateParams){
  
  var idAnimal = $stateParams.id;
  
  console.log(idAnimal);
  AnimAPI.query({id: idAnimal}, function(anim){
    $scope.animal = anim.data;
    $scope.titulo = anim.data.nome;
    console.log(anim);
  })
})

.controller('OutrosCtrl', function($scope, AnimAPI){
  $scope.titulo = "Busca por outro animais"
  
   $scope.tipo = "outro";
  
  AnimAPI.query(function (anim){
    $scope.animais = anim.data;
  });
})

.controller('OutroCtrl', function($scope, AnimAPI, $state, $stateParams){
  
  var idAnimal = $stateParams.id;
  
  console.log(idAnimal);
  AnimAPI.query({id: idAnimal}, function(anim){
    $scope.animal = anim.data;
    $scope.titulo = anim.data.nome;
    console.log(anim);
  })
})

.controller('PerfilCtrl', function($scope){
  var usertemp = localStorage.getItem("user");
  console.log(usertemp);
  if(usertemp) $scope.user = JSON.parse(usertemp).user;
})

.controller('CadAnimalCtrl', function($scope, AnimAPI){
  // $scope.endereco = [];
  
  $scope.latitude = "";
  
  $scope.longitude = "";
  
  $scope.geocoder = new google.maps.Geocoder();
  
  // $scope.map = new google.maps.Map(divDoMapa, opcoes);
  
  function converteEndereco(endereco) {
    $scope.geocoder.geocode( { 'address': endereco}, function(resultado, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        
          $scope.latitude = resultado[0].geometry.location.k
          $scope.longitude = resultado[0].geometry.location.D	
          console.log($scope.latitude);
          console.log(endereco);
      
      } else {
        alert('Erro ao converter endereço: ' + status);
      }
    });
  }
  
  $scope.animal = new AnimAPI();
  $scope.cadastra = function(){
    $scope.endereco = endereco.value
    converteEndereco($scope.endereco);
    AnimAPI.save($scope.animal, function(x) {
      console.log(x);
      console.log($scope.endereco.value);
      console.log($scope.animal.latitude);
    });
  };
})

.controller('CadUsuarioCtrl', function($scope, CadAPI){
  $scope.user = new CadAPI();
  $scope.cadastro = function(){
    CadAPI.save($scope.user, function(x) {
      console.log(x);
      console.log($scope.user);
    })
  }
});
