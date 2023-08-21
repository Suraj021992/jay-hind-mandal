import {Component} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],

  animations: [
    trigger('slideAnimation', [
      state('inactive', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('active', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition('inactive => active', animate('2000ms ease-out')),
      transition('active => inactive', animate('0ms'))
    ])
  ]
})
export class SliderComponent{
 
  slideState = 'inactive';
  interval: any;

  constructor() {
    this.startAutoSlider();
  }

  startAutoSlider() {
    this.interval = setInterval(() => {
      this.slideState = (this.slideState === 'inactive') ? 'active' : 'inactive';
      console.log(this.slideState);
    }, 3000); // Change slide every 5 seconds
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
