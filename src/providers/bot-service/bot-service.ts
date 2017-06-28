import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


export interface Context {
  context: [
    {
      numero_parada: string;
      nombre_parada: string;
      lineas_disponibles?: string[],
      tiempo_espera?: string
    }
  ]
}

export interface Response {
  input:
  {
    text: string;
  }

}
/*
  Generated class for the BotServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BotServiceProvider {

  contextInit: Context = {
    context: [
      {
        numero_parada: '2369',
        nombre_parada: 'Martínez Izquierdo'
      }
    ]
  };

  response: any;
  context: any;

  constructor(public http: Http) {
    console.log('Hello BotServiceProvider Provider');
  }

  // sendData() {
  //   this.http.post('https://equipo3-conversation.mybluemix.net/conversacion', JSON.stringify(this.contextInit))
  //     .map(res => res.json())
  //     .subscribe(res => {
  //       alert("success " + res);
  //       this.response = res.output.text[0];
  //       this.context = res.context;
  //     }, (err) => {
  //       alert("failed:" + err);
  //     });
  // }

  sendData(): Promise<any> {
    return this.http.post('https://equipo3-conversation.mybluemix.net/conversacion', JSON.stringify(this.contextInit))
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.error(error);
        alert("error");
      });
  }




}
