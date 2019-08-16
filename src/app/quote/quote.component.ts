import { Component, OnInit } from '@angular/core';
import{ Quotes} from '../qotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title="quotes";

  constructor() { }

  ngOnInit() {
  }

}
