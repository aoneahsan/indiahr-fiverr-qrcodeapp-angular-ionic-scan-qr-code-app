import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanAndVerifyPage } from './scan-and-verify.page';

const routes: Routes = [
  {
    path: '',
    component: ScanAndVerifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanAndVerifyPageRoutingModule {}
