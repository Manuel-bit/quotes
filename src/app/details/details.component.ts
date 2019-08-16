import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{ Quote} from '../quote';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() myQuote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }


  constructor() { }

  ngOnInit() {
  }

}
