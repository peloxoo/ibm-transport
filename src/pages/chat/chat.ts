import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { BotServiceProvider } from '../../providers/bot-service/bot-service';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  messages: any[];
  constructor(public navCtrl: NavController, public botService: BotServiceProvider) {

  }

  send() {
    this.botService.sendData()
      .then(msg => this.messages.push(msg.output.text[0]));
  }



}
