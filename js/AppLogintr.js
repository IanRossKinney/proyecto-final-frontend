var app = angular.module('LoginApp', []);

app.controller('ctrlLogin', function($scope,$http,$window)
{    
    
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
            var user=({ 
                rutEmpleado:$scope.modelRut, 
                password:$scope.modelPass 
            });
            $http({
                method:'POST', 
                url:"http://localhost:8080/empleados/login",
                data:user})
                .then(function(respuesta){
                    console.log(respuesta.data);
                if(respuesta.data){
                    var rol = respuesta.data.idRol;
                    if(rol.idRol===1){
                        $window.sessionStorage["rutAdmin"]=$scope.modelRut;
                        window.location.href="vistaad.html";
                    }
                    else{
                        $window.sessionStorage["rutVendedor"]=$scope.modelRut;
                        window.location.href="vistave.html";
                    }
                
                }else{
                    $scope.mostrarError=true;
                    $scope.mensaje="Rut o clave incorrectos";
                }
            });
        
        }
    };
});