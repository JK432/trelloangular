import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-a-nav',
  templateUrl: './a-nav.component.html',
  styleUrls: ['./a-nav.component.css']
})
export class ANavComponent {
  constructor(private authenticationService: AuthenticationService){}
  public onLogout() {
    this.authenticationService.logout();
  }
}
