import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessResponsePageRoutingModule } from './success-response-routing.module';

import { SuccessResponsePage } from './success-response.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessResponsePageRoutingModule,
    SharedModule
  ],
  declarations: [SuccessResponsePage]
})
export class SuccessResponsePageModule {}
