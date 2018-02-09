import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IPerson } from '../person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message= "Salam";
  ratings: number[] = [2, 5, 3.5, 4, 1, 4.5];
  eventOutput: IPerson;
  name: string;
  @ViewChild('nameInputfield') inputVar: ElementRef;

  constructor() { }

  ngOnInit() {
  }

    onClick(event: IPerson) {
      //console.log(event);
      this.eventOutput = event;
    }

    buttonClick() {
      //console.log(inputName.value);
      //this.name = inputName.value;
      //console.log(this.inputVar);
      this.name = this.inputVar.nativeElement.value;
    }
}
