import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PosHomeComponent } from './pos-home/pos-home.component'
import { PosComponent } from './pos.component'

const routes: Routes = [
  {
    path: '',
    component: PosComponent,
    children: [
      { path: '', redirectTo: '/pos/home', pathMatch: 'full' },
      { path: 'home', component: PosHomeComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosRoutingModule {}
