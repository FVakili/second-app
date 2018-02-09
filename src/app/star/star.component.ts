import { Component, OnInit, OnChanges, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { IPerson } from '../person';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StarComponent implements OnInit, OnChanges {
  starWidth: number;
  @Input('starRating') rating: number ;
  @Output() starClicked = new EventEmitter<IPerson>();
  person: IPerson= {
      name: 'Faezeh',
      age: 0,
      school: 'lat.edu'

  };
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.starWidth = this.rating * 86 /5 ;
  }

  onStarclicked() {
    this.person.age = this.rating;
    this.starClicked.emit( this.person );
  }

}
