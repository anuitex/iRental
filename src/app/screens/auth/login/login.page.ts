// Vendors
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public isShow: boolean = false;
  public passPlaceholder: string = '&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public togglePass() {
    this.isShow = !this.isShow;
  }

  public goToRegist() {
    this.router.navigateByUrl('/auth/regist');
  }

}
