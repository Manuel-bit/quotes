import { Component, OnInit } from '@angular/core';
import{ Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title="quotes";

  quote: Quote[] = [
    new Quote('the world is a cycle', 'what goes around comes around', 'emmanuel', 2, 5),
  ]

  constructor() { }

  ngOnInit() {
  }

}
