import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedasPlataformaPage } from './busquedas-plataforma.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedasPlataformaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedasPlataformaPageRoutingModule {}
