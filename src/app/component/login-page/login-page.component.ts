import { Component, OnInit ,Output } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login = 1;

  @Output() displaytext = [
    {
      id: 0,
      title: 'Create Account',
      subtitle: 'Already have an account ?',
      bttxt: 'signup',
      nav: 'Login',
    },
    {
      id: 1,
      title: 'Login',
      subtitle: 'Don\'t have an account ?',
      bttxt: 'Login',
      nav: 'Sign up',
    },
  ];

  constructor() {}

  ngOnInit() {}

  toggleUi() {
    if (this.login === 0) {
      this.login = 1;
    } else {
      this.login = 0;
    }
  }

}
