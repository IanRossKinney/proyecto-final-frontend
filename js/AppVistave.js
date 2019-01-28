var app = angular.module('vistaVendedorApp', []);

app.controller('ctrlCuadros', function($scope,$http,$window)
{  
    $scope.mostrarcuadro1 = true;
    $scope.mostrarcuadro2 = true;
    $scope.mostrarcuadro3 = true;
    $scope.bienvenido = false;

    $scope.cuadro1 = function (){
        $scope.mostrarcuadro1 = false;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = true;
        $scope.bienvenido = true;

    }
    $scope.cuadro2 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = false;
        $scope.mostrarcuadro3 = true;

        $scope.bienvenido = true;
    }
    $scope.cuadro3 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = false;
        $scope.bienvenido = true;
    } 
    $scope.obtener=function(){
        var rut=$window.sessionStorage["rutVendedor"];
        var user=({rutEmpleado:rut});
        $http({
            method:'POST',
            url:"http://localhost:8080/empleados/getempleado",
            data:user
        }).then(function(respuesta){
            $scope.vendedor=respuesta.data;
        }); 
    }

    //Cuadro 1
    /*Metodos para la modificacion de datos del perfil, aun no habilitados */      




    //Cuadro 2
    $scope.confirmacionTelefonica=function(idHora){
        var hor=({
            idHora:idHora
        })
        $http({
            method:'POST',
            url:"http://localhost:8080/horas/confirmaciontelefonica",
            data:hor
        }).then(function(respuesta){
            if(respuesta.data){
                alert("Confirmado telefonicamente")
                $scope.listarHoras();
            }
        })
    }
    $scope.confirmacionAsistencia=function(idHora){
        var hor=({
            idHora:idHora
        })
        $http({
            method:'POST',
            url:"http://localhost:8080/horas/confirmacionasistencia",
            data:hor
        }).then(function(respuesta){
            if(respuesta.data){
                alert("Cliente asiste")
                $scope.listarHoras();
            }
        })
    }
    $scope.clienteNoAsiste=function(idHora){
        var hor=({
            idHora:idHora
        })
        $http({
            method:'POST',
            url:"http://localhost:8080/horas/clientenoasiste",
            data:hor
        }).then(function(respuesta){
            if(respuesta.data){
                alert("Cliente ausente")
                $scope.listarHoras();
            }
        });

        
    }




   // Cuadro 3      
    $scope.listarHoras=function(){
        var rut=($scope.vendedor.rutEmpleado)
        var user=({
            rutEmpleado:rut
        })
        $http({
            method:'POST',
            url:"http://localhost:8080/horas/listarhorasvendedor",
            data:user
        }).then(function(respuesta){
            $scope.horas=respuesta.data;
       });
    }
    









    $scope.obtener();
});


app.controller('ctrlVendedor',function($scope,$window,$http){
    $scope.obtener=function(){
        var rut=$window.sessionStorage["rutVendedor"];
        var user=({rutEmpleado:rut});
        $http({
            method:'POST',
            url:"http://localhost:8080/empleados/getempleado",
            data:user
        }).then(function(respuesta){
            $scope.vendedor=respuesta.data;
        }); 
    }
    $scope.cierreSesion=function(){
        $window.sessionStorage["rutVendedor"]=undefinded;
    }
   

    $scope.obtener();
});
