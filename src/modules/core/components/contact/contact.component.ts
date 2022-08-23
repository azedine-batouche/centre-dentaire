import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private emailAddress: string = "samirberrahrah@hotmail.fr";
  private emailSubject: string = "Informations";
  private phone: string = "06 64 97 21 80"; 

  title: string = "contact.request";
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
