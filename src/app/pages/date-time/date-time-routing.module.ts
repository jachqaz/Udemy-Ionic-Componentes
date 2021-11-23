import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DateTimePage} from './date-time.page';

const routes: Routes = [
  {
    path: '',
    component: DateTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateTimePageRoutingModule {
}
