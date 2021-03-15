import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-scan-and-verify',
  templateUrl: './scan-and-verify.page.html',
  styleUrls: ['./scan-and-verify.page.scss'],
})
export class ScanAndVerifyPage {
  qrResultString;
  validQRs = [
    'Sproxil Authentication',
    'Ahsan Mahmood',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
  ];
  constructor(
    private _router: Router,
    private _loadingCtl: LoadingController
  ) {}
  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    const qrIndex = this.validQRs.findIndex((el) => el == resultString);
    this._loadingCtl.create({ message: 'Processing...' }).then((loadingEl) => {
      loadingEl.present();
      setTimeout(() => {
        loadingEl.dismiss();
        if (qrIndex > -1) {
          this._router.navigate(['/verification-success']);
        } else {
          this._router.navigate(['/verification-failed']);
        }
      }, 1600);
    });
  }
}
