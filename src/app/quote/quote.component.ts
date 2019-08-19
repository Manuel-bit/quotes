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
    new Quote('the world is a cycle', 'emmanuel', 'what goes around comes around', 0, 0),
    new Quote('You know you’re in love when you can’t fall asleep because reality is finally better than your dreams', 'Dr. Suess', 'nothing is better than the feeling of loving or being loved', 0, 0),
    new Quote('For evry dark night there is a brighter day', '2 Pack shakur','allways have hope for better things in future', 0, 0),
    
  ]

  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].quotes}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  addNewquote(quotes){
   let quoteLength = this.quote.length;
   quotes.id = quoteLength+1;
   this.quote.push(quotes)
 }
 upVote(index){
   this.quote[index].likes ++;
 }
 downVote(index){
   this.quote[index].dislikes ++;
 }

 get sortQuotes() {
 return this.quote.sort((a, b) => {
   return <any>new Date(b.likes) - <any>new Date(a.likes);
 });
}



  constructor() { }

  ngOnInit() {
  }

}
