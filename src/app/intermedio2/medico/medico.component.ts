import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];

  //inyecto servicio en constructor
  constructor(public _medicoService: MedicoService) { }

  ngOnInit(): void {
  }

  //funcion
  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }

  obtenerMedicos() {
    this._medicoService.getMedicos()
      .subscribe((medicos: any[]) => this.medicos = medicos);
  }

}
