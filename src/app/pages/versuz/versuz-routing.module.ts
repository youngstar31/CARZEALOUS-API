import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersuzPage } from './versuz.page';

const routes: Routes = [
  {
    path: '',
    component: VersuzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersuzPageRoutingModule {}
