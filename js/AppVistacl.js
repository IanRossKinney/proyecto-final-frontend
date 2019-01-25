var app = angular.module('VistaApp', []);



app.controller('ctrlCliente',function($scope,$window,$http){
    
    
    
    $scope.obtener=function(){
        var rut=$window.sessionStorage["rutCliente"];
        var user=({rutCliente:rut});
        $http({
            method:'POST',
            url:"http://localhost:8080/clientes/getcliente",
            data:user
        }).then(function(respuesta){
            $scope.cliente=respuesta.data;
            console.log($scope.cliente);
            
        });
    };


    $scope.obtener();
});

app.controller('ctrlCuadro', function($scope,$window,$http)
{
   $scope.mostrarcuadro1 = true;
   $scope.mostrarcuadro2 = true;
   $scope.mostrarcuadro3 = true;
   $scope.mostrarcuadro4 = true;
   $scope.bienvenido = false;

   $scope.cuadro1 = function (){
       $scope.mostrarcuadro1=false;
       $scope.mostrarcuadro2=true;
       $scope.mostrarcuadro3=true;
       $scope.mostrarcuadro4=true;
       $scope.bienvenido=true;

   }
   $scope.cuadro2 = function (){
       $scope.mostrarcuadro1=true;
       $scope.mostrarcuadro2=false;
       $scope.mostrarcuadro3=true;
       $scope.mostrarcuadro4=true;
       $scope.bienvenido=true;
   }
   $scope.cuadro3 = function (){
       $scope.mostrarcuadro1=true;
       $scope.mostrarcuadro2=true;
       $scope.mostrarcuadro3=false;
       $scope.mostrarcuadro4=true;
       $scope.bienvenido=true;
   }
   $scope.cuadro4 = function (){
       $scope.mostrarcuadro1= true;
       $scope.mostrarcuadro2=true;
       $scope.mostrarcuadro3= true;
       $scope.mostrarcuadro4=false;
       $scope.bienvenido=true;
   }
   $scope.obtener=function(){
    var rut=$window.sessionStorage["rutCliente"];
    var user=({rutCliente:rut});
    $http({
        method:'POST',
        url:"http://localhost:8080/clientes/getcliente",
        data:user
    }).then(function(respuesta){
        $scope.cliente=respuesta.data;
        console.log($scope.cliente);
        
    });
};


$scope.obtener();
   

});





