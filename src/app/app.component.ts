import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription: string = 'Advanced';
  user = {
    email: '',
    subscription: '',
    password: '',
  };
  submitted: boolean = false;

  onSubmit() {
    // console.log(this.signupForm.value);

    this.submitted = true;

    this.user.email = this.signupForm.value.userData.email;
    this.user.subscription = this.signupForm.value.userData.subscription;
    this.user.password = this.signupForm.value.userData.password;

    this.signupForm.reset();
  }
}
