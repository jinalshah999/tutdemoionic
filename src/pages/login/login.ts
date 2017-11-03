import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { UserdbProvider } from '../../providers/userdb/userdb';
import { User_Class } from "../../providers/userdb/user_class";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email_id:string='';
  password:string='';
  constructor(public navCtrl: NavController,public _db:UserdbProvider){

  }
  onLoginClick(){

      this._db.Login(new User_Class(this.email_id,this.password,''))
      .subscribe(
        (x:User_Class[])=>{

            if(x.length==1){
              alert('login');
            }
            else{
              alert('invalid');
            }
        },
        function(error){
          console.log(error);
        },
        function(){}
      );
  }

}
