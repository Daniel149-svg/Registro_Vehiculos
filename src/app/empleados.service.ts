import { Injectable } from "@angular/core";
import { empleado } from "./empleado.models";
import { ServicioEmpleadoService } from "./servicio-empleado.service";


@Injectable({
  providedIn: 'root'
})

export class empledosService{

        empleados: empleado[]=[
          new empleado('Subaru', 'J10', 'M1000', 'Blanco', 'Standar', 1999, 3000),
          new empleado('Ferrari', '488 Pista', 'F142M', 'Rojo', 'Standar', 2022, 30000),
          new empleado('Bugatti', 'Chiron', 'W16', 'Negro', 'Automático', 2021, 30000),
          
        ];

        constructor(private servicioMensaje: ServicioEmpleadoService){}

        agregar_empleado_servicio(empleado:empleado){
            this.servicioMensaje.muestra_mensaje("Nombre Ingresado: "
                + empleado.nombre);
                
            this.empleados.push(empleado);
        }
        
        eliminar_empleado_servicio(indice: number) {
          if (indice > -1) {
            this.empleados.splice(indice, 1);
          }
        }

        

        encontar_empleado(indice: number){
          let empleado: empleado = this.empleados[indice];
          return empleado;
        }

        actualizar_empleado(indice: number, empleado:empleado){
          let empleadoModificar = this.empleados[indice];
          empleadoModificar.nombre = empleado.nombre;
          empleadoModificar.apellido = empleado.apellido;
          empleadoModificar.cargo = empleado.cargo;
          empleadoModificar.color = empleado.color;
          empleadoModificar.trasmicion = empleado.trasmicion;
          empleadoModificar.anio = empleado.anio;
          empleadoModificar.salario = empleado.salario;
        }
        

        

        
}