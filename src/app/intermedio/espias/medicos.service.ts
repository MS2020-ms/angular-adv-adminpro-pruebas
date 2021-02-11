import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable()
export class MedicosService {

  constructor(public http: HttpClient) { }

  getMedicos() {
    //url no valido
    return this.http.get('...').pipe(
      map(resp => resp['medicos'])
    );
  }

  agregarMedico(medico: any) {
    //url no valido
    return this.http.post('...', medico).pipe(
      map(resp => resp['medico'])
    );
  }

  borrarMedico(id: string) {
    //url no valido
    return this.http.delete('...').pipe(
      map(resp => resp['medico'])
    );
  }


}
