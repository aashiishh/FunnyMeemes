import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { firebase_config } from '../app/app.firebase.config'
import { RegisterPage } from '../pages/register/register';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule} from '@angular/common/http';
import { MessageService } from '../myservices/MessageService';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireDatabaseModule /* , AngularFireDatabase , FirebaseListObservable*/ } from 'angularfire2/database-deprecated';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    //AngularFireDatabase,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase_config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MessageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ],
  
})
export class AppModule {}
