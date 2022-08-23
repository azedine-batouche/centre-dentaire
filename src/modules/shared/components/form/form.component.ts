import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private emailAddress: string = "contact@allonavette.fr";
  private emailSubject: string = "Informations";
  success = false;
   headers = new HttpHeaders();
  
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',Validators.required),
    message: new FormControl('', Validators.required),
    validCondition: new FormControl('', Validators.requiredTrue)
  });
    submitted = false;
    messageSuccess : any = "none";

    constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

    ngOnInit() {}

    // convenience getter for easy access to form fields
    get name() { return this.contactForm.get('name'); }
    get email() { return this.contactForm.get('email');} 
    get phone() { return this.contactForm.get('phone'); }
    get message() { return this.contactForm.get('message');}
    get validCondition() { return this.contactForm.get('validCondition');}

    onSubmit() {
        this.submitted = true;
       
this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }
        this.http.post('https://formcarry.com/s/U1Qj6k5iP', this.contactForm.getRawValue()).subscribe(
          succes => this.messageSuccess = succes,
          error => this.messageSuccess = error
        );
        this.success = true;
        
        
        // display form values on success
       // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
        this.onReset();
    }

    onReset() {
        this.submitted = false;
        this.contactForm.reset();
    }

    mailto(){
        return "mailto:" + this.emailAddress + "?subject=" + this.emailSubject
    }
  }
