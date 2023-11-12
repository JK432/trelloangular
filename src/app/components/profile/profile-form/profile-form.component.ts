import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialog} from '@angular/material/dialog';
import { DialogeService } from 'src/app/services/dialoge.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {

  user:User;
  profileForm: FormGroup;

  constructor(private authenticationService: AuthenticationService, public dialog: MatDialog, public dialogService: DialogeService, private formBuilder: FormBuilder, private http: HttpClient){
  this.user = authenticationService.getudata()
    this.profileForm = this.formBuilder.group({
    first_name: [this.user.first_name, Validators.required],
      last_name: [this.user.last_name, Validators.required],
      age: [this.user.age, Validators.required],
    });
  }

  onSubmit() {
    let newUser: User = { id: this.user.id, email: this.user.email, first_name: this.profileForm.get('first_name')!.value, last_name: this.profileForm.get('last_name')!.value, age: this.profileForm.get('age')!.value,role:this.user.role }
    console.log(environment.apiUrl + '/user/' + this.user.id + '/', newUser)
    this.http.patch(environment.apiUrl + '/user/' + this.user.id + '/', newUser)
      .subscribe({
        next: (data) => {
          this.authenticationService.getuserdata()
          this.dialog.closeAll()
          location.reload();
        }, error: (error) => { }
      });
  }



}
