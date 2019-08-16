export class Quote {
  showDescription:boolean;
  constructor(public quotes:string, public author:string, public description:string, public likes:number, public dislikes:number){
    this.showDescription = false;
  }
}
