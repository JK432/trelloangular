import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  loginform: FormGroup; // Define the FormGroup

  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder) {
    this.loginform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  username: string = "";
  password: string = "";
  show: boolean = false;

  public onSubmit() {
    this.authenticationService.login(
      this.loginform.get('email')!.value,
      this.loginform.get('password')!.value
    );
  }
}
