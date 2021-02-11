import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  //inyecto en constructor
  constructor(public http: HttpClient) { }

  getMedicos() {
    //url no valido
    //return this.http.get('...');
    return this.http.get('...').pipe(
      map(resp => resp['medicos'])
    );
  }
}
