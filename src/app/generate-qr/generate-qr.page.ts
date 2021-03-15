import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.page.html',
  styleUrls: ['./generate-qr.page.scss'],
})
export class GenerateQrPage implements OnInit {
  ngOnInit() {}

  qrData = null;
  createdCode = 'ahsan';
  scannedCode = null;
  barcodeScanner: any;

  customQRCode: string = 'ahsan';

  // constructor(private barcodeScanner: BarcodeScanner) {}
  constructor() {}

  createCode() {
    this.createdCode = this.qrData;
    console.log(this.createdCode);
  }

  scanCode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.scannedCode = barcodeData.text;
    });
  }
}
