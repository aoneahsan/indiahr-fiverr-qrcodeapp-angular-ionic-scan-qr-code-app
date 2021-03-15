import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorResponsePage } from './error-response.page';

const routes: Routes = [
  {
    path: '',
    component: ErrorResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorResponsePageRoutingModule {}
