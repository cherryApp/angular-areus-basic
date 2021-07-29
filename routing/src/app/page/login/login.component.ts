import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.auth.login(this.user).subscribe(
      user => this.router.navigate(['/'])
    );
  }

  setPasswords(): void {
    for (const id of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
      this.userService.update({id, password: 'test'}).subscribe(
        resp => console.log(resp)
      );
    }
  }

}
