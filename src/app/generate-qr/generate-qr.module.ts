import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerateQrPageRoutingModule } from './generate-qr-routing.module';

import { GenerateQrPage } from './generate-qr.page';
// import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRCodeModule } from 'angularx-qrcode';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerateQrPageRoutingModule,
    // NgxQRCodeModule,
    QRCodeModule,
    SharedModule
  ],
  declarations: [GenerateQrPage]
})
export class GenerateQrPageModule {}
