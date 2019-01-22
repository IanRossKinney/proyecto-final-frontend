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
            var user=({ 
                rutEmpleado:$scope.modelRut, 
                password:$scope.modelPass 
            });
            $http({
                method:'POST', 
                url:"http://localhost:8080/empleados/login",
                data:user})
                .then(function(respuesta){
                if(respuesta.data /*y rol ==1*/ ){
                    //Abrir ventana admin
                    window.location.href="http:google.cl";
                }else if(respuesta.data/*y rol=2 */){
                    //Abrir ventada vendedor
                }
                else{
                    $scope.mostrarError=true;
                    $scope.mensaje="Rut o clave incorrectos";
                }
            })
        
        }
    };
});