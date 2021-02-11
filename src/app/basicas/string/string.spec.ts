import { mensaje } from './string'

//describe: para agrupar pruebas
describe('Pruebas de Strings', () => {

    //it: es una prueba especifica, evaluacion en concreto
    it('Debe de regresar un string', () => {
        const resp = mensaje('Miguel');
        expect(typeof resp).toBe('string');
    })

    it('Debe de retorna un saludo con nombre enviado', () => {
        const nombre = 'Juan';
        const resp = mensaje(nombre);
        expect(resp).toContain(nombre);
    })
});