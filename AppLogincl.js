var app = angular.module('LoginApp', []);

app.controller('ctrlLogin', function($scope,$http)
{    
    
    $scope.mostrarLogin = true;
    $scope.mostrarError = false;
    $scope.mensaje = "";
    $scope.modelPass="";
    $scope.modelRut="";



    $scope.iniciarSesion = function(){

        
        if($scope.modelRut=="" || $scope.modelPass==""){
            $scope.mostrarError=true;
            $scope.mensaje = "Ingrese datos";
            
        }
        else{
            var user=({ rutCliente:$scope.modelRut, password:$scope.modelPass });
            $http({
                method:'POST', 
                url:"http://localhost:8080/clientes/login",
                data:user})
                .then(function(respuesta){
                if(respuesta.data){
                    window.location.href="http:google.cl";
                }else{
                    $scope.mostrarError=true;
                    $scope.mensaje="Rut o clave incorrectos";
                }
            })
        
        }
    };
});