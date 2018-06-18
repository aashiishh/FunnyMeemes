import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { User } from '../../models/user';
import * as firebase from 'firebase';


@Injectable()
export class FirebaseServiceProvider {

  ack : boolean = false;
  authState: any = null;
  constructor(public http: HttpClient,private afauth:AngularFireAuth/*private db: AngularFireDatabase,*/) {

    this.afauth.authState.subscribe((auth) => {
      this.authState = auth
    });
    console.log('Hello FirebaseServiceProvider Provider');
  }

  async login(user : User) 
  {
    
   const result = await this.afauth.auth.signInWithEmailAndPassword(user.email,user.password).then( () => {      
    this.ack=true;
   }).catch(() =>{

      this.ack=false;

   });

    return this.ack;

  }

 async SendPasswordResetLink(email : string)
  {
      await this.afauth.auth.sendPasswordResetEmail(email).then( () => {
          this.ack=true;
        }).catch( () => {
            this.ack=false;
        });
        
        return this.ack;
  }


///////////////////////////////


get authenticated(): boolean {
  return this.authState !== null;
}



  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afauth.authState
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) { return 'Guest' }
    else if (this.currentUserAnonymous) { return 'Anonymous' }
    else { return this.authState['displayName'] || 'User without a Name' }
  }

  //// Social Auth ////
  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider()
    return this.socialSignIn(provider);
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.socialSignIn(provider);
  }

  twitterLogin(){
    const provider = new firebase.auth.TwitterAuthProvider()
    return this.socialSignIn(provider);
  }

  private async socialSignIn(provider) {
   const result = await this.afauth.auth.signInWithRedirect(provider)
    .then((credential) =>  {
      this.authState = credential.user
      return true;
    //  this.updateUserData()
  })
  .catch(error => console.log(error));
    /*return this.afauth.auth.signInWithPopup(provider)
      .then((credential) =>  {
          this.authState = credential.user
        //  this.updateUserData()
      })
      .catch(error => console.log(error));*/
  }


  //// Anonymous Auth ////
  anonymousLogin() {
    return this.afauth.auth.signInAnonymously()
    .then((user) => {
      this.authState = user
     // this.updateUserData()
    })
    .catch(error => console.log(error));
  }

  //// Email/Password Auth ////
  emailSignUp(email:string, password:string) {
    return this.afauth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        //this.updateUserData()
      })
      .catch(error => console.log(error));
  }

  emailLogin(email:string, password:string) {
     return this.afauth.auth.signInWithEmailAndPassword(email, password)
       .then((user) => {
         this.authState = user
         //this.updateUserData()
       })
       .catch(error => console.log(error));
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    var auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }


  //// Sign Out ////
  async signOut() {
   const result = await this.afauth.auth.signOut().then(data => 
        data=true
    ).catch( data => data = false);
    return result;
  }


  //// Helpers ////
  /*private updateUserData(): void {
  // Writes user name and email to realtime db
  // useful if your app displays information about users or for admin features
    let path = `users/${this.currentUserId}`; // Endpoint on firebase
    let data = {
                  email: this.authState.email,
                  name: this.authState.displayName
                }

    this.db.object(path).update(data)
    .catch(error => console.log(error));

  }*/







}
