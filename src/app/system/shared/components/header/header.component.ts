import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';
import {User} from '../../../../shared/models/user.model';
import {AuthService} from '../../../../shared/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 date: Date = new Date();
 dateS = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

 user: User;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
