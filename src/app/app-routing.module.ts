import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'scan-and-verify',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then( m => m.DemoPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'success-response',
    loadChildren: () => import('./success-response/success-response.module').then( m => m.SuccessResponsePageModule)
  },
  {
    path: 'error-response',
    loadChildren: () => import('./error-response/error-response.module').then( m => m.ErrorResponsePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
