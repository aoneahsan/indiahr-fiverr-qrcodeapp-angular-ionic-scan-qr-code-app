import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-scan-and-verify',
  templateUrl: './scan-and-verify.page.html',
  styleUrls: ['./scan-and-verify.page.scss'],
})
export class ScanAndVerifyPage implements OnInit {
  qrResultString;
  validQRs = [
    4002161724068,
    4002161380608,
    4002160595869,
    4002165796092,
    4002160137138,
    4002162993557,
    4002167849869,
    4002160031987,
    4002160968682,
    4002168978817,
    4002160696117,
    4002161456448,
    4002164310884,
    4002162696487,
    4002160316331,
    4002166597841,
    4002166597841,
    4002161386639,
    4002167362931,
    4002165509701,
    4002161622940,
    4002168001415,
    4002166302646,
    4002165649497,
    4002165649497,
    4002165533702,
    4002168288424,
    4002162120975,
    4002165232162,
    4002163831576,
    4002162635957,
    4002165816740,
    4002166453121,
    4002161690745,
    4002160241020,
    4002166954338,
    4002166604876,
    4002163780306,
    4002162395777,
    4002161010571,
    4002165243593,
    4002162284227,
    4002164314086,
    4002163221818,
    4002160574617,
    4002164430718,
  ];
  processing: boolean = false;
  constructor(
    private _router: Router,
    private _loadingCtl: LoadingController
  ) {}

  ngOnInit() {
    this.processing = false;
  }

  onCodeResult(resultString) {
    this.processing = true;
    this.qrResultString = resultString;
    const qrIndex = this.validQRs.findIndex((el) => el == resultString);
    this._loadingCtl.create({ message: 'Processing...' }).then((loadingEl) => {
      loadingEl.present();
      setTimeout(() => {
        loadingEl.dismiss();
      }, 1600);
      setTimeout(() => {
        this.loadingDone(qrIndex);
      }, 2200);
    });
  }

  loadingDone(qrIndex) {
    if (qrIndex > -1) {
      this._router.navigate(['/verification-success']);
    } else {
      this._router.navigate(['/verification-failed']);
    }
    setTimeout(() => {
      this.processing = false;
    }, 1000);
  }
}
