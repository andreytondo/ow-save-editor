import { NgModule } from '@angular/core';

import { GeneralConfigComponent } from './general-config.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: GeneralConfigComponent
    }
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
    ],
    exports: [],
    declarations: [GeneralConfigComponent],
    providers: [],
})
export class GeneralConfigModule { }
