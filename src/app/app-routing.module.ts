import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'verification-success',
    loadChildren: () => import('./success-response/success-response.module').then( m => m.SuccessResponsePageModule)
  },
  {
    path: 'verification-failed',
    loadChildren: () => import('./error-response/error-response.module').then( m => m.ErrorResponsePageModule)
  },
  {
    path: 'scan-and-verify',
    loadChildren: () => import('./scan-and-verify/scan-and-verify.module').then( m => m.ScanAndVerifyPageModule)
  },
  {
    path: 'generate-qr',
    loadChildren: () => import('./generate-qr/generate-qr.module').then( m => m.GenerateQrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
