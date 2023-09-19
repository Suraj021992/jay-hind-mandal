import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaintitleComponent } from './maintitle/maintitle.component';
import { SliderComponent } from './slider/slider.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { VideopageComponent } from './videopage/videopage.component';
import { ImgscrollComponent } from './imgscroll/imgscroll.component';
import { LatestUpdateComponent } from './latest-update/latest-update.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaintitleComponent,
    SliderComponent,
    GalleryComponent,
    FooterComponent,
    GalleryPageComponent,
    AboutComponent,
    VideopageComponent,
    ImgscrollComponent,
    LatestUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
