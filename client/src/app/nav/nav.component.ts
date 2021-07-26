import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import {Observable} from "rxjs";
import {User} from "../_models/user";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  currentUser$: Observable<User>;

  constructor( private accountService: AccountService) { }

  ngOnInit(): void {
  //  this.getCurrentUser();
    this.currentUser$ = this.accountService.currentUser$;
  }

  login () {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.accountService.logout();
  }
}
