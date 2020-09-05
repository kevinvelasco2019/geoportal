import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedasPlataformaPageRoutingModule } from './busquedas-plataforma-routing.module';

import { BusquedasPlataformaPage } from './busquedas-plataforma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedasPlataformaPageRoutingModule
  ],
  declarations: [BusquedasPlataformaPage]
})
export class BusquedasPlataformaPageModule {}
