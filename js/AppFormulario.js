var app= angular.module('FormularioApp',[]);
app.controller('ctrlRegistro', function($scope,$http)
{
    
    $scope.mostrarError = false;
    $scope.mensaje = "";
    $scope.rut = "";
    $scope.nombre = "";
    $scope.apellido = "";
    $scope.email = "";
    $scope.password = "";
    $scope.password2 = "";
    $scope.telefono = "";
    
    


    $scope.registrarse= function(){
        var user=({
            rutCliente:$scope.rut,
            nombre:$scope.nombre,
            apellido:$scope.apellido,
            telefono:$scope.telefono,
            email:$scope.email,
            password:$scope.password
        });
        if($scope.rut == ""|| $scope.nombre==""||$scope.apellido==""||$scope.email==""||$scope.password==""||$scope.password2==""||$scope.telefono==""){
            $scope.mostrarError=true;
            $scope.mensaje="Ingrese todos los campos requeridos";
            console.log("Error Campos")
        }else if($scope.password != $scope.password2){
            $scope.mostrarError=true;
            $scope.mensaje="Las contraseñas no coinciden";
        }
        else{
        
            $http({
                method:'PUT',
                url:"http://localhost:8080/clientes/registrarcliente",
                data:user
            }).then(function(respuesta){
                console.log(respuesta.data);
                if(respuesta.data){
                   alert("Registrado correctamente, inicie sesion");
                   window.location.href="home.html";
                }else{
                    $scope.mostrarError=true;
                    $scope.mensaje="El rut o el email ya se encuentran registrados";
                }
            });
        }

    
    };


});