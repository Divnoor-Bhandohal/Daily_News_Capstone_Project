import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(public auth : AuthService, @Inject(DOCUMENT) private doc : Document)
  {

  }

  logout() : void{
    this.auth.logout({returnTo: this.doc.location.origin})
  }

}
