import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile'; 
import { HomePage } from '../pages/home/home'; 
import { Socket } from 'ng-socket-io';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { NavController } from 'ionic-angular';
import { ShareService } from '../app/service/share.service';
import BASE_URL from '../app/BASE_URL';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = LoginPage;
  BASE_URL = BASE_URL;
  user : any ={
    avartar : 'user.avartar',
  };
  @ViewChild('mycontent') nav : NavController;
  constructor(platform: Platform,private sv : ShareService, statusBar: StatusBar, splashScreen: SplashScreen,private socket: Socket,private cookieService: CookieService) {
    platform.ready().then(() => {
      console.log("Cookie",this.cookieService.getObject('user'));
      this.checkCookie();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  checkCookie(){
    if(this.cookieService.getObject('user') == null || this.cookieService.getObject('user') == ''){
      return this.nav.setRoot(LoginPage);
    }else{
      this.user = this.cookieService.getObject("user")['original'];
      return this.nav.setRoot(HomePage);
    }
  }
  openPage(page){
    switch(page){
      case "profile":
        return this.nav.push(ProfilePage);
      case "logout":
        this.socket.emit("adminLogout",this.cookieService.getObject("user")['original']);
        this.sv.removeUser(this.cookieService.getObject("user")['original']);
        this.cookieService.removeAll();
        return this.nav.setRoot(LoginPage);
    }  
  }
}