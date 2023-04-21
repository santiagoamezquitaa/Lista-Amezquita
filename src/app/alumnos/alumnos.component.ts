import { Component, OnInit } from '@angular/core';


interface alumnos {
  nombre: string;
  sexo: string;
  carrera: string;
  activo: boolean;
  valorMatricula: number;
  ultimaFechaDePago: Date;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent{

  listaAlumnos: Array<alumnos> = [
    {
      nombre: 'Santiago Amezquita Ayure',
      sexo: 'm',
      carrera: 'Ingenieria de telecomunicaciones',
      activo: true,
      valorMatricula: 6855000,
      ultimaFechaDePago: new Date('2022-11-19 01:58:06'),    
    },
    {
      nombre: 'Jennyfer Bedoya Muñoz',
      sexo: 'f',
      carrera: 'Finanzas',
      activo: true,
      valorMatricula: 8283000,
      ultimaFechaDePago: new Date('2023-04-14 04:40:58'),    
    },
    {
      nombre: 'Julian Figueredo Rojas',
      sexo: 'm',
      carrera: 'Arquitecto',
      activo: false,
      valorMatricula: 11131000,
      ultimaFechaDePago: new Date('2013-12-27 02:22:33'),       
    },
    {
      nombre: 'Daniel Montaña Cruz',
      sexo: 'm',
      carrera: 'Ingenieria eléctrica',
      activo: false,
      valorMatricula: 12397120,
      ultimaFechaDePago: new Date('2016-11-29 16:04:11'),    
    },
    {
      nombre: 'Liliana Rodriguez Forero',
      sexo: 'f',
      carrera: 'Derecho',
      activo: true,
      valorMatricula: 6312800,
      ultimaFechaDePago: new Date('2023-01-19 01:26:20'),    
    }
  ];

  constructor() { }


}
