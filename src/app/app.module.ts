import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AnDesenv } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ChatPage } from '../pages/chat/chat';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedPage } from '../pages/shared/shared';

@NgModule({
  declarations: [
    AnDesenv,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SharedPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AnDesenv)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AnDesenv,
    AboutPage,
    ContactPage,
    HomePage,
    ChatPage,
    SharedPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
