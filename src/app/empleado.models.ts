export class empleado{
    nombre: string = "";
    apellido: string = "";
    cargo: string = "";
    color: string;
    trasmicion: string;
    anio: number;
    salario: number = 0;
  

    constructor(
        nombre:string,
        apellido:string,
        cargo: string,
        color: string,
        trasmicion: string,
        anio: number,
        salario: number
    ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.color = color;
        this.trasmicion = trasmicion;
        this.anio = anio;
        this.salario = salario;
    }
}