import { HttpHeaders } from '@angular/common/http';
import { HttpClient} from  '@angular/common/http'
import { Component } from '@angular/core';
import { take } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public name!: string;
  public email!: string;
  public company!: string;
  public message!: string;

  isSubmitted = false;
  constructor(private http: HttpClient) { }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mjvdzrrb',
        { name: email.name, replyto: email.email, subject :email.company, message: email.message },
        { 'headers': headers }).pipe(take(1)).subscribe(
          response => {
            contactForm.reset();
            console.log(response);
            this.isSubmitted=true;
          }
        );
    }
  }

}
