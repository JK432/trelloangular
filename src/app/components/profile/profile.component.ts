import { Component } from '@angular/core';
import { DialogeService } from 'src/app/services/dialoge.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/interfaces/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  user: User = {age:0,email:"",first_name:"",id:-1,last_name:"",role:-1};
  constructor(private authenticationService: AuthenticationService,private dialogService:DialogeService){
    // this.user = this.authenticationService.getudata();
  }
  ngOnInit(){
    this.user = this.authenticationService.getudata();
  }
  openDialog() {
    this.dialogService.openProfileForm();
  }
}
