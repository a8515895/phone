import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile'; 
import { TabsPage } from '../pages/tab/tab'; 
import { Socket } from 'ng-socket-io';
import { NavController } from 'ionic-angular/index';
import { ShareService } from '../app/service/share.service';
import BASE_URL from '../app/BASE_URL';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
  BASE_URL = BASE_URL;
  user : any ={
    avartar : 'user.avartar',
  };
  @ViewChild('mycontent') nav : NavController;
  constructor(platform: Platform,private sv : ShareService, statusBar: StatusBar, splashScreen: SplashScreen,private socket: Socket) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.checkCookie();
    });
  }
  checkCookie(){   
    if(localStorage.getItem('user') == null || localStorage.getItem('user') == ''){
      this.rootPage = LoginPage
    }else{
      this.user = localStorage.getItem("user");
      this.rootPage = TabsPage;
    }
    return this.nav.setRoot(this.rootPage);
  }
  openPage(page){
    switch(page){
      case "profile":
        return this.nav.push(ProfilePage);
      case "logout":
        this.socket.emit("adminLogout",this.user);
        localStorage.clear();
        return this.nav.setRoot(LoginPage);
    }  
  }
}