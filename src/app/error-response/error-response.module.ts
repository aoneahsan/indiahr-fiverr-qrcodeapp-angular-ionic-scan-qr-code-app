import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorResponsePageRoutingModule } from './error-response-routing.module';

import { ErrorResponsePage } from './error-response.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorResponsePageRoutingModule,
    SharedModule
  ],
  declarations: [ErrorResponsePage]
})
export class ErrorResponsePageModule {}
