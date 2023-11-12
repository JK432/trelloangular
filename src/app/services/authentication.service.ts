import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from '../clients/authentication.clients';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user: User[] = [];
  private tokenKey = 'token';
  private udatakey = 'udata';


  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router,
  ) { }

  public login(username: string, password: string): void {
    this.authenticationClient.login(username, password).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token);
      this.getuserdata();
      this.router.navigate(['/dash']);
    });
  }
  public getuserdata(): void {

    this.authenticationClient.getuserdata().subscribe((data) => {
      this.user = JSON.parse(data);
      localStorage.setItem(this.udatakey, JSON.stringify(this.user[0]));

    });
  }


  public logout() {
    localStorage.removeItem(String(this.tokenKey));
    localStorage.removeItem(this.udatakey);
    localStorage.clear();

    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }

  public getudata(): any | null {
    return JSON.parse(localStorage.getItem(String(this.udatakey))!);
  }

}
