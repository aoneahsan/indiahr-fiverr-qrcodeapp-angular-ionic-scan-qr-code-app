// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';
// import { BrowserCodeReader } from '@zxing/browser';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {
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
