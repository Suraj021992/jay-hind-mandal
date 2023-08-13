import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintitleComponent } from './maintitle/maintitle.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [

  {path: "", component: MaintitleComponent},
  {path: "homepage",component: MaintitleComponent },
  {path: "aboutpage", component: AboutComponent},
  {path:"gallery",component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
