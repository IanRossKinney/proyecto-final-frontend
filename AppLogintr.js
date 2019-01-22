var app = angular.module('LoginApp', []);

app.controller('ctrlLogin', function($scope)
{    
    
    $scope.mostrarLogin = true;
    $scope.mostrarError = false;
    $scope.mensaje = "";
    $scope.modelRut= "";
    $scope.modelPass="";

    $scope.iniciarSesion = function(){

        
        if( $scope.modelRut == "12.345.678-9" &&  $scope.modelPass=="123456" ){
            $scope.mostrarError = false;
            $scope.mostrarLogin = false;
        }
        else if($scope.modelRut=="" || $scope.modelPass==""){
            $scope.mostrarError = true;
            $scope.mensaje = "Ingrese datos";
            
        }else{
            $scope.mostrarError = true;
            $scope.mensaje = "Usuario y/o Clave incorrectos";
        }
    };
});