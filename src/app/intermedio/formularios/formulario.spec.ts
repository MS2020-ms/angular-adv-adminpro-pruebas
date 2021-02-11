import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';


describe('Formularios', () => {

    let componente: FormularioRegister;

    //antes de que empiece cada prueba
    beforeEach(() => {
        //tiene que cumplir las condiciones del constructor
        componente = new FormularioRegister(new FormBuilder());
    });

    it('Debe de crear un formulario con dos campos, email y password', () => {

        //debe de existir esos campos
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();

    });

    //validaciones de formulario
    it('El email debe de ser obligatorio', () => {

        const control = componente.form.get('email');
        control.setValue('');
        //toBeFalsy porque control (email) le doy valor '', pero es un campo requerido -> retorna false
        expect(control.valid).toBeFalsy();

    });

    it('El email debe de ser un correo válido', () => {

        const control = componente.form.get('email');
        control.setValue('fernando@gmail.com');
        expect(control.valid).toBeTruthy();

    });



});
