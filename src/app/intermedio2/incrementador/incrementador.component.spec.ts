import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    //component: hace referencia a propiedades y metodos del componente
    //fixture: para comprobar el DOM
    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            //modulo FormsModule importado para poder usar ngModel en el html
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    // Prueba sencilla:
    // it('Hola', () => {expect(true).toBeTruthy();});

    //PRUEBAS en el HTML del componente
    it('Debe de mostrar la leyenda en tag h3', () => {
        component.leyenda = 'Progreso de Carga';
        fixture.detectChanges(); //disparar la deteccion de cambios y se actualicen 

        //seleccionar elemento h3 del HTML mediante queries
        //By.css('.input-group') or By.css('#input-group')
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        //evaluar su contenido interno
        expect(elem.innerHTML).toContain('Progreso de Carga');
    });

    //REVISAR el valor de un input
    it('Debe de mostrar en el input el valor del progreso', () => {

        component.cambiarValor(5);
        fixture.detectChanges(); //disparar la deteccion de cambios y se actualicen

        //La deteccion de cambio demora mas que las pruebas unitarias,
        //cuando termine detecciones de cambio y este lista xa ser evaluada:
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const elem = input.nativeElement;

            //console.log(elem);

            expect(elem.value).toBe('55');
        });

    });

    //REVISAR que los botones tenga el evento deseado
    it('Debe de incrementar/decrementar en 5, con un click en el boton', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        //console.log(botones);

        //xa disparar el click (boton decrementador), valor origen es 50
        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45)

        //xa disparar el click (boton incrementador), valor origen es 45 (no lo he reseteado)
        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50)
    });

    //CONFIRMAR que el progreso ha cambiado
    it('En el titulo del componente debe de mostrar el progreso', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges(); //disparar la deteccion de cambios y se actualicen

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('45');

    });

});
