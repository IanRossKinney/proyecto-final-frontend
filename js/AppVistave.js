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





    //Cuadro 2





   // Cuadro 3         /*Operaciones informativas disabled*/
   // $scope.listarHoras=function(){
   //     $http({
   //         method:'GET',
   //         url:"http://localhost:8080/horas/listarhorasvendedor",
   //         data:$scope.vendedor
   //     }).then(function(respuesta){
   //         $scope.horas=respuesta.data;
   //    });
   // }
    









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