import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersuzPageRoutingModule } from './versuz-routing.module';

import { VersuzPage } from './versuz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersuzPageRoutingModule
  ],
  declarations: [VersuzPage]
})
export class VersuzPageModule {}
