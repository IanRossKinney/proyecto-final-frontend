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
        });
    };


    $scope.obtener();
});



app.controller('ctrlCuadro', function($scope,$window,$http)
{
   $scope.mostrarError=false; 
   $scope.mostrarcuadro1 = true;
   $scope.mostrarcuadro2 = true;
   $scope.mostrarcuadro3 = true; 
   $scope.matchExitoso=true;
   $scope.matchError=true;
   $scope.bienvenido = false;

   $scope.cuadro1 = function (){
       $scope.mostrarcuadro1=false;
       $scope.mostrarcuadro2=true;
       $scope.mostrarcuadro3=true;       
       $scope.matchExitoso=true;
       $scope.matchError=true;
       $scope.bienvenido=true;

   }
   $scope.cuadro2 = function (){
       $scope.mostrarcuadro1=true;
       $scope.mostrarcuadro2=false;
       $scope.mostrarcuadro3=true;     
       $scope.matchExitoso=true;
       $scope.matchError=true;
       $scope.bienvenido=true;
   }
   $scope.cuadro3 = function (){
       $scope.mostrarcuadro1=true;
       $scope.mostrarcuadro2=true;
       $scope.mostrarcuadro3=false;
       $scope.matchExitoso=true;      
       $scope.bienvenido=true;
       $scope.matchError=true;
   }

  
   //Cuadro 1
   //Modificaciones de perfil aun no habilitadas

   //Cuadro 2

   $scope.tipoHora="";
       $scope.fechaDestino="";
       $scope.horario="";
       $scope.mostrarError=false;
       $scope.mensaje="";
       $scope.matchExitoso=true;
       $scope.matchError=true;

   $scope.preferencia=function(){
       

       if($scope.tipoHora==""||$scope.fechaDestino==""||$scope.horario==""){
            $scope.mostrarError=true;
            $scope.mensaje="Ingrese todos los campos";
       }else{
           var hora=({
               tipoHora:$scope.tipoHora,
               fecha:$scope.fechaDestino,
               hora:$scope.horario
           });
           $http({
               method:'POST',
               url:"http://localhost:8080/horas/matchhora",
               data:hora
           }).then(function(respuesta){
               if(respuesta.data.length==1){
                   $scope.preferencias=respuesta.data;
                   console.log($scope.preferencias)
                   $scope.matchExitoso=false;
               }
               else if(respuesta.data.length>1){
                   $scope.preferencias=respuesta.data
                   console.log($scope.preferencias)
                   $scope.matchError=false;
               }else{
                   $scope.mostrarError=true;
                   $scope.mensaje="No se encontro la hora preferida\nPruebe con otra fecha";
               }   //Ultimo metodo por modificar
               //REVISAR LA CONSULTA SQL EN EL BACKEND, DEVUELVE MAS DE UNA HORA
           });
       }
    }



       $scope.reservar=function(hora){
        alert("Hora agendada")
   };






























   $scope.obtener=function(){
    var rut=$window.sessionStorage["rutCliente"];
    var user=({rutCliente:rut});
        $http({
            method:'POST',
            url:"http://localhost:8080/clientes/getcliente",
            data:user
        }).then(function(respuesta){
            $scope.cliente=respuesta.data;    
        });
    };
    $scope.obtener();
   

});





