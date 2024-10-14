import { Component, Output, EventEmitter } from '@angular/core';
import { emit } from 'process';
import { ServicioEmpleadoService } from '../servicio-empleado.service';


@Component({
  selector: 'app-caracteristicas-empleado-c',
  standalone: true,
  imports: [],
  providers: [ServicioEmpleadoService],
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasEmpleados = new
  EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadoService){}

  agregar_caracteristicas(value: string){
    //this.miServicio.muestra_mensaje("carateristica agregada: "+value);
    this.caracteristicasEmpleados.emit(value);
  }

}
