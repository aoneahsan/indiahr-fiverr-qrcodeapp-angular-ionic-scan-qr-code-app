import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qrResultString;
  validQRs = [
    'Sproxil Authentication',
    'Ahsan Mahmood',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
  ];
  constructor(private _router: Router) {}
  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    const qrIndex = this.validQRs.findIndex((el) => el == resultString);
    if (qrIndex > -1) {
      this._router.navigate(['/verification-success']);
    } else {
      this._router.navigate(['/verification-failed']);
    }
  }
}
