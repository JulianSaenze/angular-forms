import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    //set the value of the whole form (not the best approach)
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    //better approach -> patchValue to overwrite parts of the form and setValue to set the whole form
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }});
  }

  //triggered every time that form is submitted
  onSubmit(form: NgForm){
    console.log(form);
  }
}
