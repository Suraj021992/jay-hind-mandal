import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MaintitleComponent } from './maintitle/maintitle.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './maintitle/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaintitleComponent,
    AboutComponent,
    FooterComponent,
    SliderComponent
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
