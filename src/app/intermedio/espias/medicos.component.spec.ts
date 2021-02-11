import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, EMPTY, throwError, Observable } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    //le envio un null porque no uso el http, son pruebas unitarias
    const servicio = new MedicosService(null);

    beforeEach(() => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: debe de cargar los medicos', () => {

        //ESPIAS
        //cuando se llame a getMedicos del servicio, vas a hacer la funcion callFake()
        //getMedicos retorna un Observable
        const medicos = ['medico1', 'medico2', 'medico3'];
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return from([medicos]);
        })

        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    // it('Debe de llamar al servicio para agregar un medico'), () => {

    //     //ESPIAS
    //     //EMPTY es una constante que se importa de rxjs y devuelve un observable vacío
    //     const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => {
    //         return EMPTY;
    //     });
    //     componente.agregarMedico();
    //     expect(espia).toHaveBeenCalled();
    // }

    it('Debe de agregar un nuevo medico al array de medicos', () => {

        const medico = { id: 1, nombre: 'Juan' };

        //ESPIA
        spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    //Probar un error en un observable
    it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {
        const miError = 'No se puedo agregar el medico';

        //ESPIA
        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));

        componente.agregarMedico();
        expect(componente.mensajeError).toBe(miError);
    });

    //Simular confirmacion de usuario
    it('Debe de llamar al servidor para borrar un medico', () => {

        //ESPIA para simular el confirm(ok)
        spyOn(window, 'confirm').and.returnValue(true);

        //ESPIA
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

        componente.borrarMedico('1');
        expect(espia).toHaveBeenCalledWith('1');
    });

    //Simular denegacion de usuario
    it('NO Debe de llamar al servidor para borrar un medico', () => {

        //ESPIA para simular el confirm(ok)
        spyOn(window, 'confirm').and.returnValue(false);

        //ESPIA
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

        componente.borrarMedico('1');
        expect(espia).not.toHaveBeenCalledWith('1');
    });

});
