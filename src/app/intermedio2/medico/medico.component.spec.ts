import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';

describe('MedicoComponent', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>; //acceso al HTML -> DOM

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService], //xa servicios
      imports: [HttpClientModule] //xa otros componentes o modulos
    })

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });

  it('Debe de crearse el componente correctamente', () => {

    expect(component).toBeTruthy();
  });

  it('La funcion saludarMedico, debe de retornar el nombre del medico', () => {
    const nombre = 'Juan';
    const resp = component.saludarMedico(nombre);

    expect(resp).toContain(nombre);
  });

});
