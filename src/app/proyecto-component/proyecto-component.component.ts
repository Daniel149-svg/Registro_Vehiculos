import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empleado } from '../empleado.models';
import { FormsModule } from '@angular/forms';

import { empledosService } from '../empleados.service';


@Component({
  selector: 'app-proyecto-component',
  standalone: true,
  imports: [FormsModule],
  providers: [Router],
  templateUrl: './proyecto-component.component.html',
  styleUrl: './proyecto-component.component.css'
})
export 
class ProyectoComponentComponent implements OnInit{

  volverHome(){
    this.router.navigate(['']);
  

  }
  titulo = 'Listado de Vehiculos';

  empleados:empleado[];
 

  cuadroNombre: string ="";
  cuadroApellido: string ="";
  cuadroCargo: string ="";
  cuadroColor: string ="";
  cuadroTrasmicion: string ="";
  cuadroAnio: number=0;
  cuadroSalario: number=0;

  constructor(private router: Router, private empleadosService:
    empledosService){    

  }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  guardar_empleado(){
    //if
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroColor, this.cuadroTrasmicion, this.cuadroAnio, this.cuadroSalario);

   this.empleadosService.agregar_empleado_servicio(miEmpleado);

   this.router.navigate(['']);
  

    this.cuadroNombre="";
    this.cuadroApellido="",
    this.cuadroCargo="",
    this.cuadroColor="",
    this.cuadroTrasmicion="",
    this.cuadroAnio=0;
    this.cuadroSalario=0;
  }



}
