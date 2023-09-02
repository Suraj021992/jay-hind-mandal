import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintitleComponent } from './maintitle/maintitle.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { AboutComponent } from './about/about.component';
import { VideoComponent } from './video/video.component';
import { VideopageComponent } from './videopage/videopage.component';
import {TimerComponent} from './timer/timer.component';



const routes: Routes = [
  {path:"", component: TimerComponent},
  // {path: "homepage",component: MaintitleComponent },
  // {path: "photopage", component:GalleryPageComponent},
  // {path:"aboutpage",component:AboutComponent},
  // {path:"videoja",component:VideoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
