import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular/index';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// PLUGIN
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://node.sega-group.com:3000'};
// CUSTOM PAGE
import { PopoverPage } from '../custom-page/popover/popover';
import { HomeMessageClone } from '../custom-page/home-message-clone/homeMessageClone';
// PAGE
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { ChatPage } from '../pages/chat/chat';
import { LoginPage } from '../pages/login/login';
import { Diary } from '../pages/diary/diary';
import { Register } from '../pages/register/register';
import { Phonebook } from '../pages/phonebook/phonebook';
import { TabsPage } from '../pages/tab/tab';
// SERVICE
import { HttpService } from './service/http.service';
import { VerifyService } from './service/verify.service';
import { AdminService } from './service/admin.service';
import { DomService } from './service/dom.service';
import { ShareService } from './service/share.service';
import { RoomService } from './service/room.service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ProfilePage,
    ChatPage,
    LoginPage,
    Diary,
    Register,
    PopoverPage,
    HomeMessageClone,
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
    HomePage,
    TabsPage,
    ProfilePage,
    ChatPage,
    Register,
    LoginPage,
    PopoverPage,
    HomeMessageClone,
    Diary,
    Phonebook
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    AdminService,
    VerifyService,
    ShareService,
    RoomService,
    DomService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
