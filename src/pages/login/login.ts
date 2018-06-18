import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { HomePage } from '../home/home';
import { MessageService } from '../../myservices/MessageService';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


user = {} as User;
ack : boolean = false;

  constructor(private fireService:FirebaseServiceProvider,private msg:MessageService,public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    
 
    
  }

   goforlogin(user : User)
  {
   
      this.fireService.login(user).then(data => {
       
        if(data)
        {
          this.msg.showToast("Successfully Logged In");
          this.navCtrl.setRoot(HomePage);
        }

      }).catch( error => {

        this.msg.popUp("login error!",error);
        this.user.email='';
        this.user.password='';

      });

  }

  logme()
  {
    console.log("YESSS");
  }

  forgotPass()
  {
    
      let alert = this.alertCtrl.create({
        title: 'Change Password',
        inputs: [
          {
            name: 'email',
            placeholder: 'enter your email'
          },
       /*   {
            name: 'password',
            placeholder: 'Password',
            type: 'password'
          }*/
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
             this.msg.showToast("change password request cancelled.")
            }
          },
          {
            text: 'Send',
            handler: data => {

            this.fireService.SendPasswordResetLink(data.email).then(result => {
              if(result)
              {
              this.msg.showToast("Reset password link has been sent on your email address")
              
              }
              else
              {
                this.msg.popUp("error","entered email address is not registered")
                console.log(result);
              }
            });
            
            }
          }
        ]
      });
      alert.present();
  }

  blankField()
  {
    this.msg.blackFieldError();
  }
  register()
  {
    this.navCtrl.setRoot(RegisterPage);
  }

  googleLogin()
  {
    this.fireService.googleLogin();
  }

  facebookLogin()
  {
    this.fireService.facebookLogin();
  }
  ionViewDidLoad() {
    
        //this.popUp("Congratulations!!!","You are on the login page");

  }

}
