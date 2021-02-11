import { MedicoComponent } from "src/app/intermedio2/medico/medico.component";
import { RUTAS } from "./app.routes";

describe('Rutas principales', () => {

    //probar la existencia de una ruta en particular
    it('Debe de existir la ruta /medico/:id', () => {

        expect(RUTAS).toContain({
            path: 'medico(:id', component: MedicoComponent
        })
    });



});