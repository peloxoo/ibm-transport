import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



export interface Line {
  idlinea: string;
  humedad: string;
  temperatura: string;
  ocupacion: string;
  minusvalidos_libres: string;
  carros_libres: string;
}

export interface Stop {
  idparada: string;
}

/*
  Generated class for the InfoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class InfoServiceProvider {

  constructor(public http: Http) {
    console.log('Hello InfoServiceProvider Provider');
  }
  takeLine(numero: string) {
    this.http.post('https://hack-equip3-orq.mybluemix.net/api/getdatoslinea', JSON.stringify(numero))
      .map(res => res.json())
      .subscribe(res => {
        alert("success " + res);
      }, (err) => {
        alert("failed:" + err);
      });
  }

  takeStop() {
    this.http.post('https://hack-equip3-orq.mybluemix.net/api/getdatosparada', JSON.stringify('P1'))
      .map(res => res.json())
      .subscribe(res => {
        alert("success " + res.json);
      }, (err) => {
        alert("failed:" + err);
      });
  }

}
