import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// PLUGIN
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://node.sega-group.com:3000'};
// PAGE
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { ChatPage } from '../pages/chat/chat';
import { LoginPage } from '../pages/login/login';
import { Diary } from '../pages/diary/diary';
import { Phonebook } from '../pages/phonebook/phonebook';
import { TabsPage } from '../pages/tab/tab';
// SERVICE
import { HttpService } from './service/http.service';
import { VerifyService } from './service/verify.service';
import { AdminService } from './service/admin.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ShareService } from './service/share.service';

export function cookieServiceFactory() {
  return new CookieService();
}
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ProfilePage,
    ChatPage,
    LoginPage,
    Diary,
    Phonebook
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule,
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    ProfilePage,
    ChatPage,
    LoginPage,
    Diary,
    Phonebook
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    CookieService,
    AdminService,
    VerifyService,
    ShareService,
    { provide: CookieService, useFactory: cookieServiceFactory },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
