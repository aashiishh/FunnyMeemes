import {Injectable} from "@angular/core";
import { ToastController,AlertController } from 'ionic-angular';
@Injectable()

export class MessageService {
    constructor(public toastCtrl:ToastController,public alertCtrl:AlertController){}

  showToast(meg1) {
    const toast = this.toastCtrl.create({
        message: meg1,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  }

  popUp(mes1,mes2)
  {
    const alert = this.alertCtrl.create({
      title: mes1,
      subTitle: mes2,
      buttons: ['OK']
    });
    alert.present();
  }

  blackFieldError()
  {
    this.showToast('all fields must be field');
  }

  
}

