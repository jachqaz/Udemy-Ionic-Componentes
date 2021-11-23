import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CheckPage} from './check.page';

const routes: Routes = [
  {
    path: '',
    component: CheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckPageRoutingModule {
}
