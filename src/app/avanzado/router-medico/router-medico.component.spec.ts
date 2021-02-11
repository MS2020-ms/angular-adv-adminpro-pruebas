import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, from, Observable, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

//CREO una clase FakeRouter
//del router solo me interesa probar la funcion navigate
class FakeRouter {
  navigate(params) { }
}

//CREO una clase FakeActivatedRoute
class FakeActivatedRoute {
  //COMENTAR SOLO A PARTIR DE OP-2!!!
  //params: Observable<any> = EMPTY;

  //OP-2: Para poder insertar valores a un Observable
  private subject = new Subject();
  push(valor) {
    this.subject.next(valor);
  }
  //regresar un nuevo Observable
  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      //importar los providers: igual que fueron inyectados en conponente -> constructor()
      providers: [
        //Router, //en vez de Router utiliza el FakeRouter:
        //ActivatedRoute //en vez de ActivatedRoute utiliza el FakeActivatedRoute:
        { provide: Router, useClass: FakeRouter },
        //COMENTAR SOLO A PARTIR DE OP-2!!!
        //{ provide: ActivatedRoute, useClass: FakeActivatedRoute }
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{ id: 'nuevo' }]),
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a medico cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const espia = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(espia).toHaveBeenCalledWith(['medico', '123']);

  });

  //prueba de comprobar que se está recibiendo el parámetro id='nuevo'
  it('Debe de colocar el id = nuevo', () => {

    // component = fixture.componentInstance;
    // const activatedRoute: FakeActivatedRoute = TestBed.inject(ActivatedRoute);
    // //simular que en los params, viene un id con el valor de 'nuevo'
    // activatedRoute.push({ id: 'nuevo' });

    expect(component.id).toBe('nuevo');

  });


  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
