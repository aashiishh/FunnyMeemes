import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { MessageService } from '../../myservices/MessageService';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

user = {} as User;

  constructor(private msg:MessageService,private afauth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }


  goforSignIn()
  {
    this.navCtrl.setRoot(LoginPage);
  }

  async signup(user : User)
  {
    try{
    const result = await this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password).then(() =>{

      this.afauth.auth.currentUser.updateProfile({
        displayName: user.name,
        photoURL: "test.jpg"
      });
      
      this.afauth.auth.currentUser.sendEmailVerification();
      this.msg.showToast("You are registered successfully!!!");
    }).catch(() =>{
      this.msg.popUp("Error!","Please enter a valid email address");
 });
 user.name='';
 user.password='';
 user.email='';
    }
    catch(e)
    {
      console.error(e);
    }
  }

  blankField()
  {
    this.msg.blackFieldError();
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
