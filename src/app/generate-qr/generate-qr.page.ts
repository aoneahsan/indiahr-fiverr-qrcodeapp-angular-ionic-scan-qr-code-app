import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.page.html',
  styleUrls: ['./generate-qr.page.scss'],
})
export class GenerateQrPage implements OnInit {
  customQRCode: string = 'ahsan';
  toastTimeOut;

  constructor(private _toast: ToastController) {}

  ngOnInit() {
    setTimeout(() => {
      this._toast.dismiss(null, null, 'me');
    }, 10000);
  }

  changeQRCode(code: string) {
    if (this.toastTimeOut) {
      clearTimeout(this.toastTimeOut);
    }
    this.customQRCode = code;
    this._toast
      .create({
        id: 'me',
        message: 'QR Code Value Set to: ' + code,
      })
      .then((toast) => {
        toast.present();
        this.toastTimeOut = setTimeout(() => {
          toast.dismiss();
        }, 3000);
      })
      .catch((err) => {
        console.log('Error while showing toast = ', err);
      });
  }
}
