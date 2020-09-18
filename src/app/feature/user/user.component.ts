import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {UserLogin} from '../../shared/model/user-login';

@Component({
  selector: 'sg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');
  category = new FormControl('Select tribe');
  userRequest = {} as UserLogin;

  constructor(
      private router: Router,
      private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.getUserDetails(this.email.value, this.password.value, this.category.value).subscribe(
        data => {
          this.userService.currentUser = data;
          this.router.navigate(['/bookmark-url']);
        }, error => {
          alert('Invalid user or password. Try clicking on register after entering mail and password');
        }
    );
  }

  register() {
    const email: string = this.email.value;
    const pwd: string = this.password.value;
    if (email.length > 0 && pwd.length > 0) {
      this.userRequest.email = this.email.value;
      this.userRequest.password = this.password.value;
      this.userRequest.category = this.category.value;
      this.userService.registerUser(this.userRequest).subscribe(
          data => {
            this.userService.currentUser = data;
            this.router.navigate(['/bookmark-url']);
          }, error => {
            alert('Failed registering, confirm the email id is not already registered');
          }
      );
    } else {
      alert('Please enter your email and desired password');
    }
  }

}
