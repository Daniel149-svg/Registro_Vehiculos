import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmpleadoHijoCComponent } from '../empleado-hijo-c/empleado-hijo-c.component';
import { empleado } from '../empleado.models';
import { empledosService } from '../empleados.service';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, FormsModule, EmpleadoHijoCComponent],
  providers: [ServicioEmpleadoService,],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

  titulo = 'Registro de Vehiculos';

  empleados:empleado[];
 

    cuadroNombre: string ="";
    cuadroApellido: string ="";
    cuadroCargo: string ="";
    cuadroColor: string ="";
    cuadroTrasmicion: string ="";
    cuadroAnio: number=0;
    cuadroSalario: number=0;

  constructor(private miServicio: ServicioEmpleadoService, private empleadosService: empledosService ){
      

  }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  guardar_empleado(){
    //if
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroColor, this.cuadroTrasmicion,this.cuadroAnio, this.cuadroSalario);

   this.empleadosService.agregar_empleado_servicio(miEmpleado);

    this.cuadroNombre="";
    this.cuadroApellido="",
    this.cuadroCargo="",
    this.cuadroColor="",
    this.cuadroTrasmicion="",
    this.cuadroAnio=0;
    this.cuadroSalario=0;
  }

  eliminar_empleado(indice: number) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este vehículo?');
    
    if (confirmacion) {
      this.empleadosService.eliminar_empleado_servicio(indice);
    }
  }
  
}
