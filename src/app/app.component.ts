import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MessageService } from '../myservices/MessageService';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 // @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  constructor(/*private afauth:AngularFireAuth,*/platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen/*,private msg:MessageService,public alertCtrl:AlertController*/) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  
}

