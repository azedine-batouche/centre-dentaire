import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private emailAddress: string = "samirberrahrah@hotmail.fr";
  private emailSubject: string = "Informations";
  private phone: string = "06 64 97 21 80"; 

  constructor() { }

  ngOnInit(): void {
  }

  mailto() {
    return "mailto:" + this.emailAddress + "?subject=" + this.emailSubject
}
phoneto(){
  return "tel:" + this.phone;
}

}
