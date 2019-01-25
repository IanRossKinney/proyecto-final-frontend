var app = angular.module('vistaAdApp', []);


/*Controlador de las opciones */
app.controller('ctrlCuadros', function($scope,$window,$http)
{  
    $scope.mostrarcuadro1 = true;
    $scope.mostrarcuadro2 = true;
    $scope.mostrarcuadro3 = true;
    $scope.mostrarcuadro4 = true;
    $scope.mostrarcuadro5 = true;
    $scope.mostrarcuadro6 = true;
    $scope.mostrarcuadro7 = true;
    $scope.bienvenido = false;

    $scope.cuadro1 = function (){
        $scope.mostrarcuadro1 = false;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = true;
        $scope.mostrarcuadro4 = true;
        $scope.mostrarcuadro5 = true;
        $scope.mostrarcuadro6 = true;
        $scope.bienvenido = true;

    }
    $scope.cuadro2 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = false;
        $scope.mostrarcuadro3 = true;
        $scope.mostrarcuadro4 = true;
        $scope.mostrarcuadro5 = true;
        $scope.mostrarcuadro6 = true;
        $scope.mostrarcuadro7 = true;
        $scope.bienvenido = true;
    }
    $scope.cuadro3 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = false;
        $scope.mostrarcuadro4 = true;
        $scope.mostrarcuadro5 = true;
        $scope.mostrarcuadro6 = true;
        $scope.mostrarcuadro7 = true;
        $scope.bienvenido = true;
    }
    $scope.cuadro4 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = true;
        $scope.mostrarcuadro4 = false;
        $scope.mostrarcuadro5 = true;
        $scope.mostrarcuadro6 = true;
        $scope.mostrarcuadro7 = true;
        $scope.bienvenido = true;
    }
    $scope.cuadro5 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = true;
        $scope.mostrarcuadro4 = true;
        $scope.mostrarcuadro5 = false;
        $scope.mostrarcuadro6 = true;
        $scope.mostrarcuadro7 = true;
        $scope.bienvenido = true;
    }
    $scope.cuadro6 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = true;
        $scope.mostrarcuadro4 = true;
        $scope.mostrarcuadro5 = true;
        $scope.mostrarcuadro6 = false;
        $scope.mostrarcuadro7 = true;
        $scope.bienvenido = true;
    }
    $scope.cuadro7 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = true;
        $scope.mostrarcuadro4 = true;
        $scope.mostrarcuadro5 = true;
        $scope.mostrarcuadro6 = true;
        $scope.mostrarcuadro7 = false;
        $scope.bienvenido = true;
    }
    $scope.obtener=function(){
        var rut=$window.sessionStorage["rutAdmin"];
        var user=({rutEmpleado:rut});
        $http({
            method:'POST',
            url:"http://localhost:8080/empleados/getempleado",
            data:user
        }).then(function(respuesta){
            $scope.administrador=respuesta.data;
        }); 
    }

    //Cuadro 1

    //Cuadro 2
    $scope.emple=function(){
        $http({
            method:'GET',
            url:"http://localhost:8080/empleados/listamenu"
        }).then(function(respuesta){
            $scope.empleados=respuesta.data;
        })
    }
    $scope.emple();

    $scope.tipoHora="";
    $scope.fehaDestino="";
    $scope.horario="";
    $scope.vendedor="";

    $scope.asignarVendedor=function(){
        if($scope.tipoHora==""||$scope.fechaDestino==""||$scope.horario==""||$scope.vendedor==""){
            $scope.mostrarError=true;
            $scope.mensaje="Ingrese todos los campos requeridos"
        }else{
            
            var horaDestinada=({
                tipoHora:$scope.tipoHora,
                fecha:$scope.fechaDestino,
                hora:$scope.horario,
                rutEmpleado:$scope.vendedor
            });
            $http({
                method:'POST',
                url:"http://localhost:8080/horas/guardarhora",
                data:horaDestinada
            }).then(function(respuesta){
                if(respuesta.data){
                    console.log("Hora agendada correctamente");
                }else{
                    console.log("La hora ya se encuentra designada");
                }
            })
        }
    }



    //Cuadro 3
    $scope.listarHorasVenta=function(){
    
        $http({
            method:'GET',
            url:"http://localhost:8080/horas/listarhorasventa",
        }).then(function(respuesta){
            
            $scope.horas=respuesta.data;
        })
    }
    $scope.eliminarHora=function(hora){
        $http({
            method:'POST',
            url:"http://localhost:8080/horas/eliminarhora",
            data:hora
        });
        alert("Hora eliminada");
        
    }

     //Cuadro 4
     $scope.listarHorasPostVenta=function(){
    
        $http({
            method:'GET',
            url:"http://localhost:8080/horas/listarhoraspostventa",
        }).then(function(respuesta){
            
            $scope.horas=respuesta.data;
        })
    }
    $scope.eliminarHora=function(hora){
        $http({
            method:'POST',
            url:"http://localhost:8080/horas/eliminarhora",
            data:hora
        });
        alert("Hora eliminada");
        
    }

    //Cuadro 5
    $scope.mostrarError=false;
    $scope.mensaje="";
    $scope.rutEmp="";
    $scope.nomEmp="";
    $scope.apeEmp="";
    $scope.emailEmp="";
    $scope.passEmp="";
    $scope.telEmp="";
    $scope.registrarEmpleado=function(){
        var empleado=({
            rutEmpleado:$scope.rutEmp,
            nombre:$scope.nomEmp,
            apellido:$scope.apeEmp,
            email:$scope.emailEmp,
            password:$scope.passEmp,
            telefono:$scope.telEmp
        });
        if($scope.rutEmp==""||$scope.nomEmp==""||$scope.apeEmp==""||$scope.emailEmp==""||$scope.passEmp==""||$scope.telEmp==""){
            $scope.mostrarError=true;
            $scope.mensaje="Ingrese todos los campos solicitados";
        }else{
            $http({
                method:'PUT',
                url:"http://localhost:8080/empleados/registrarempleado",
                data:empleado
            }).then(function(respuesta){
                if(respuesta.data){
                    alert("Se ha registrado al vendedor correctamente")
                    $scope.rutEmp="";
                    $scope.nomEmp="";
                    $scope.apeEmp="";
                    $scope.emailEmp="";
                    $scope.passEmp="";
                    $scope.telEmp=""
                    
                }else{
                    $scope.mostrarError=true;
                    $scope.mensaje="El Rut o el Email ya se encuentran en uso";
                }
            });
        }
    }

    //Cuadro 6
    $scope.listarEmpleados=function(){
        $http({
            method:'GET',
            url:"http://localhost:8080/empleados/listamenu"
        }).then(function(respuesta){
            $scope.empleados=respuesta.data;
        })
    }
    $scope.eliminarEmpleado=function(empleado){
        $http({
            method:'POST',
            url:"http://localhost:8080/empleados/eliminarempleado",
            data:empleado
        });
        alert("Cliente eliminado");
        
    }

    //Cuadro 7
    $scope.listarClientes=function(){
        $http({
            method:'GET',
            url:"http://localhost:8080/clientes/listarclientes"
        }).then(function(respuesta){
            $scope.clientes=respuesta.data;
        })
    }
    $scope.eliminarCliente=function(cliente){
        $http({
            method:'POST',
            url:"http://localhost:8080/clientes/eliminarcliente",
            data:cliente
        });
        alert("Cliente eliminado");
    }

   


    //Metodo incial para info de admin
    $scope.obtener();
});

/*Controlador para obtener los datos del admin */
app.controller('ctrlAdmin',function($scope,$http,$window){
    $scope.obtener=function(){
        var rut=$window.sessionStorage["rutAdmin"];
        var user=({rutEmpleado:rut});
        $http({
            method:'POST',
            url:"http://localhost:8080/empleados/getempleado",
            data:user
        }).then(function(respuesta){
            $scope.administrador=respuesta.data;
        }); 
    }
    $scope.cierreSesion=function(){
        $window.sessionStorage["rutAdmin"]=undefined;
    }
    $scope.obtener();
});


    
