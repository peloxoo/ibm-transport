import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ChatPage } from '../pages/chat/chat';
import { HomePage } from '../pages/home/home';
import { DeviceInfoPage } from '../pages/device-info/device-info';
import { LineInfoPage } from '../pages/line-info/line-info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BotServiceProvider } from '../providers/bot-service/bot-service';
import { InfoServiceProvider } from '../providers/info-service/info-service';

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    HomePage,
    DeviceInfoPage,
    LineInfoPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    HomePage,
    DeviceInfoPage,
    LineInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BotServiceProvider,
    InfoServiceProvider
  ]
})
export class AppModule { }
