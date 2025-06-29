import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessResponsePage } from './success-response.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessResponsePageRoutingModule {}
