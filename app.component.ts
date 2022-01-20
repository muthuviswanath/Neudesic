import { Component} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./custom.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class AppComponent{

  messagetoindia:string = 'We assumed office at a time when confidence in the India story was waning.';
  constructor(){

  }
}