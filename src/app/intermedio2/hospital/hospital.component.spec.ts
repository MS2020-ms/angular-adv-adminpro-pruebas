import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  //async por el componente.ts depende de la carga del componente.html
  //async trabajando con webpack no es necesario

  // beforeEach(async () => {
  // await TestBed.configureTestingModule({
  //   declarations: [HospitalComponent]
  // })
  // trabajando con webpack no es necesario:
  // .compileComponents();
  // });

  //async por el componente.ts depende de la carga del componente.html
  //async SOLO si estoy trabajando con webpack no es necesario
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalComponent]
    })

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de crear un HospitalComponent', () => {
    expect(component).toBeTruthy();
  });
});
