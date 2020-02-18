import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsUserPageRoutingModule } from './details-user-routing.module';

import { DetailsUserPage } from './details-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsUserPageRoutingModule
  ],
  declarations: [DetailsUserPage]
})
export class DetailsUserPageModule {}
