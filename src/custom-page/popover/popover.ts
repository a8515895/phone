import { Component} from '@angular/core';
import { NavParams,ViewController } from 'ionic-angular/index';
import {AdminService} from "../../app/service/admin.service";
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class PopoverPage{ 
  room : any;
  target : any;
  jid : any;
  constructor(public navParams:NavParams,public ad : AdminService,public viewCtrl: ViewController) {
    this.room = this.navParams.get('room');
    this.target = this.navParams.get('target');
    this.jid = this.navParams.get('jid');
  }
  deleteMessage(){
    this.viewCtrl.dismiss({type : "delete",jid : this.jid,room : this.room})
  }
  getInfo(){
    this.viewCtrl.dismiss({type : "delete",jid : this.jid,room : this.room})
  }
}