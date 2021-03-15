import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanAndVerifyPageRoutingModule } from './scan-and-verify-routing.module';

import { ScanAndVerifyPage } from './scan-and-verify.page';
import { SharedModule } from '../shared/shared.module';
import { ZXingScannerModule } from 'src/zxing-scanner/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanAndVerifyPageRoutingModule,
    SharedModule,
    ZXingScannerModule
  ],
  declarations: [ScanAndVerifyPage]
})
export class ScanAndVerifyPageModule {}
