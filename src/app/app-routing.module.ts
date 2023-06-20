import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sunstation', loadChildren: () => import('./components/config-page/config-page.module').then(m => m.ConfigPageModule ) },
  { path: 'ashtwin', loadChildren: () => import('./components/config-page/config-page.module').then(m => m.ConfigPageModule ) },
  { path: 'embertwin', loadChildren: () => import('./components/config-page/config-page.module').then(m => m.ConfigPageModule ) },
  { path: 'timberhearth', loadChildren: () => import('./components/config-page/config-page.module').then(m => m.ConfigPageModule ) },
  { path: 'atterlock', loadChildren: () => import('./components/config-page/config-page.module').then(m => m.ConfigPageModule )},
  { path: 'brittlehollow', loadChildren: () => import('./components/config-page/config-page.module').then(m => m.ConfigPageModule ) },
  { path: 'hollowslantern', loadChildren: () => import('./components/config-page/config-page.module').then(m => m.ConfigPageModule ) },
  { path: 'giantsdeep', loadChildren: () => import('./components/config-page/config-page.module').then(m => m.ConfigPageModule ) },
  { path: 'quantummoon', loadChildren: () => import('./components/config-page/config-page.module').then(m => m.ConfigPageModule ) },
  { path: 'darkbramble', loadChildren: () => import('./components/config-page/config-page.module').then(m => m.ConfigPageModule ) },
  { path: 'interloper', loadChildren: () => import('./components/config-page/config-page.module').then(m => m.ConfigPageModule ) },
  { path: 'whs', loadChildren: () => import('./components/config-page/config-page.module').then(m => m.ConfigPageModule ) },
  { path: 'opc', loadChildren: () => import('./components/config-page/config-page.module').then(m => m.ConfigPageModule ) },
  { path: 'general', loadChildren: () => import('./components/general-configs/general-config.module').then(m => m.GeneralConfigModule ) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
