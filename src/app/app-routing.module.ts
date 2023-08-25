import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintitleComponent } from './maintitle/maintitle.component';

const routes: Routes = [
  {path: "", component: MaintitleComponent},
  {path: "homepage",component: MaintitleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
