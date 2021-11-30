import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
// import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-scan-and-verify',
  templateUrl: './scan-and-verify.page.html',
  styleUrls: ['./scan-and-verify.page.scss'],
})
export class ScanAndVerifyPage implements OnInit {
  qrResultString;
  validQRs = [4002164430718];
  processing: boolean = false;
  constructor(
    private _router: Router,
    // private _loadingCtl: LoadingController,
    private _toastCtl: ToastController
  ) {}

  ngOnInit() {
    this.processing = false;
  }

  onCodeResult(resultString) {
    if (resultString != this.qrResultString) {
      // this.processing = true;
      this.qrResultString = resultString;
      // const qrIndex = this.validQRs.findIndex((el) => el == resultString);
      // this._loadingCtl.create({ message: 'Processing...' }).then((loadingEl) => {
      //   loadingEl.present();
      //   setTimeout(() => {
      //     loadingEl.dismiss();
      //   }, 1600);
      //   setTimeout(() => {
      //     this.loadingDone(qrIndex);
      //   }, 2200);
      // });
      this._toastCtl
        .create({ message: 'QR Value: ' + resultString })
        .then((toast) => {
          toast.present();
          setTimeout(() => {
            toast.dismiss();
          });
        });
    }
  }

  // loadingDone(qrIndex) {
  //   if (qrIndex > -1) {
  //     this._router.navigate(['/verification-success']);
  //   } else {
  //     this._router.navigate(['/verification-failed']);
  //   }
  //   setTimeout(() => {
  //     this.processing = false;
  //   }, 1000);
  // }
}
