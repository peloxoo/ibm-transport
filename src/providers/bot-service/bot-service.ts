import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


export interface Context {
  context: [
    {
      numero_parada: string;
      nombre_parada: string;
    }
  ]
}

/*
  Generated class for the BotServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BotServiceProvider {

  context: Context = {
    context: [
      { numero_parada: '2369', nombre_parada: 'Martínez Izquierdo' }
    ]
  };

  constructor(public http: Http) {
    console.log('Hello BotServiceProvider Provider');
  }

  sendData() {
    this.http.post('https://node-e3.mybluemix.net/conversacion', JSON.stringify(this.context))
      .map(res => res.json())
      .subscribe(res => {
        alert("success " + res);
      }, (err) => {
        alert("failed:" + err);
      });
  }

}
