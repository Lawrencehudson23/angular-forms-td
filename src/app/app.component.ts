import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f', { static: false }) signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer: '';
  genders = ['male', 'female'];
  defaultGender = 'female';
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    //NOTE: SetValue
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });
    //NOTE: PatchValue
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
    //NOTE: Reset form
    this.signUpForm.reset();
  }
}
