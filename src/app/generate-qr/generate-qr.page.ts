import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, ToastController } from '@ionic/angular';
// import { toPng, toJpeg, toSvg } from 'html-to-image';
// import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.page.html',
  styleUrls: ['./generate-qr.page.scss'],
})
export class GenerateQrPage implements OnInit {
  @ViewChild('qrCode') qrCode: ElementRef;

  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  customQRCode: string = 'ahsan';
  toastTimeOut;

  constructor(
    private _toast: ToastController,
    private _actionSheetCtl: ActionSheetController
  ) {}

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

  openDownloadMenu() {
    // this._actionSheetCtl.create()
  }

  downloadImage(type) {
    // var node = document.getElementsByClassName('qrcode')[0];
    // if (type == 'png') {
    //   toPng(node)
    //     .then(function (dataUrl) {
    //       var img = new Image();
    //       img.src = dataUrl;
    //       console.log(dataUrl, node);
    //       // window.open(dataUrl, '_blank');
    //     })
    //     .catch(function (error) {
    //       console.error('oops, something went wrong!', error);
    //     });
    // } else if (type == 'jpg') {
    //   toJpeg(this.qrCode.nativeElement)
    //     .then(function (dataUrl) {
    //       var img = new Image();
    //       img.src = dataUrl;
    //       window.open(dataUrl, '_blank');
    //     })
    //     .catch(function (error) {
    //       console.error('oops, something went wrong!', error);
    //     });
    // } else if (type == 'svg') {
    //   toSvg(this.qrCode.nativeElement)
    //     .then(function (dataUrl) {
    //       var img = new Image();
    //       img.src = dataUrl;
    //       window.open(dataUrl, '_blank');
    //     })
    //     .catch(function (error) {
    //       console.error('oops, something went wrong!', error);
    //     });
    // }
    // html2canvas(this.qrCode.nativeElement).then((canvas) => {
    //   this.canvas.nativeElement.src = canvas.toDataURL();
    //   this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
    //   this.downloadLink.nativeElement.download = 'marble-diagram.png';
    //   this.downloadLink.nativeElement.click();
    // });
  }
}
