import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  title: string = 'faq.subtitle';
  nbQuestions: number = 7;
  collapseShow: number = 0;

 constructor() { }

 ngOnInit(): void {
 }
 counter(i:number){
   return new Array(i);
 }

}
