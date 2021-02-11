import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

//importar xa probar rutas
import { RouterTestingModule } from '@angular/router/testing'

import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
//OPCION 1: declarar el componente Navbar
//import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

//xa ignorar pruebas a hacer de este componente -> xdescribe
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        //OPCION 1: declarar el componente Navbar
        //NavbarComponent
      ],
      //importar xa probar rutas
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      //OPCION 2: va ignorar cualquier directiva que no conozca
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  //xa ignorar prueba -> xit
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebas');
  });

  //CONFIRMAR que existe un router-outlet
  it('Debe de tener un router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));

    //no deberia ser nulo
    expect(debugElement).not.toBeNull();
  });


  //NO es necesario pues he eliminado en contenido original del app.html incluido el title:
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('pruebas app is running!');
  // });



});
