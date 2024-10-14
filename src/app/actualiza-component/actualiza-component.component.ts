import { Component, OnInit } from '@angular/core';
import { empledosService } from '../empleados.service';
import { empleado } from '../empleado.models';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualiza-component',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export 

  class ActualizaComponentComponent implements OnInit{

    volverHome(){
      this.router.navigate(['']);
    
  
    }
    titulo = 'Actualizar Vehiculo';
  
    empleados:empleado[];
   
  
    cuadroNombre: string ="";
    cuadroApellido: string ="";
    cuadroCargo: string ="";
    cuadroColor: string ="";
    cuadroTrasmicion: string ="";
    cuadroAnio: number=0;
    cuadroSalario: number=0;
    indice: number=0;
  
    constructor(private router: Router, private empleadosService:
      empledosService, private route: ActivatedRoute){    
  
    }
    ngOnInit(): void {
      this.indice = this.route.snapshot.params['id'];
      let empleado: empleado = this.empleadosService.encontar_empleado
      (this.indice);
      this.cuadroNombre = empleado.nombre;
      this.cuadroApellido = empleado.apellido;
      this.cuadroCargo= empleado.cargo;
      this.cuadroColor= empleado.color;
      this.cuadroTrasmicion= empleado.trasmicion;
      this.cuadroAnio = empleado.anio;
      this.cuadroSalario = empleado.salario;


    }
  
    actualizar_empleado(){
      //if
      let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroColor, this.cuadroTrasmicion, this.cuadroAnio, this.cuadroSalario);
  
     this.empleadosService.actualizar_empleado(this.indice, miEmpleado);
  
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
