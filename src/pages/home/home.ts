import { Component } from '@angular/core';
import { NavController, AlertController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import { MessageService } from '../../myservices/MessageService';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

user = {} as  User;

  constructor(private fireService:FirebaseServiceProvider,public menuCtrl: MenuController,public navCtrl: NavController,private afauth:AngularFireAuth,private msg:MessageService,public alertCtrl:AlertController) {

  }

  items = [
    'Games',
    'FIFA',
    'Avengers',
    'Indian TV Shows',
    'Bollywood',
    'Hollywood',
    'South Indian Movies',
    'Phones',
    'Kids',
    'Movies'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  gotologin()
  {
    this.navCtrl.push(LoginPage);
  }

  logout()
  {
    
      const confirm = this.alertCtrl.create({
        title: 'Good Bye',
        message: 'See you again '+this.afauth.auth.currentUser.displayName+'.',
        buttons: [
          {
            text: 'logout',
            handler: () => {
             
              this.fireService.signOut().then(data => {
                if(data)
                {
                  console.log(data);
                  this.navCtrl.setRoot(LoginPage);
                }
              }).catch(error => {
                this.msg.popUp('error',error)
              });
            }
          },
          {
            text: 'wait',
            handler: () => {
              this.msg.showToast("logout request cancelled");
            }
          }
        ]
      });
      confirm.present();
    
   // 
  
  }

  ionViewDidLoad() {
    var local_user = this.afauth.auth.currentUser;
    this.user.name=local_user.displayName;
     if(local_user.emailVerified)
     {
       this.msg.popUp('Great!!!',"Thanks for the registration "+local_user.displayName+", you are now a verified user");
     }
     else{
       this.afauth.auth.currentUser.sendEmailVerification();
      this.msg.popUp('Email Not Verified',"Thanks for the registration "+local_user.displayName+", please verify your account through the link we have sent on your email");
    }
  }


}
