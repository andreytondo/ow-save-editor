import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ConfigPageComponent } from './config-page.component';

const routes: Routes = [
    {
      path: '',
      component: ConfigPageComponent
    }
  ];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
      CommonModule,
      FormsModule
    ],
    exports: [],
    declarations: [ConfigPageComponent],
    providers: [],
})
export class ConfigPageModule { }
