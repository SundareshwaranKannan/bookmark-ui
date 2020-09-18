import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserComponent} from './user.component';
import {UserService} from '../../service/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of, throwError} from 'rxjs';
import {User} from '../../shared/model/user';
import {UserLogin} from '../../shared/model/user-login';
import {RouterTestingModule} from '@angular/router/testing';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  const user = {} as User;
  user.email = 'sample@gmail.com';
  const userRequest = {} as UserLogin;
  userRequest.email = 'sample@gmail.com';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login based on email and password', () => {
    spyOn(userService, 'getUserDetails').and.returnValue(of(user));
    component.email.setValue('sample@gmail.com');
    component.password.setValue('asd');
    component.category.setValue('Tribe');
    component.login();
    expect(component.email.value).toBe(user.email);
  });

  it('should display alert when login failed', () => {
    const error = new Error('Unable to handel');
    spyOn(window, 'alert');
    spyOn(userService, 'getUserDetails').and.returnValue(throwError(error));
    component.email.setValue('sample@gmail.com');
    component.password.setValue('asd');
    component.category.setValue('Tribe');
    component.login();
    expect(window.alert).toHaveBeenCalledWith
    ('Invalid user or password. Try clicking on register after entering mail and password');
  });

  it('should register new user', () => {
    spyOn(userService, 'registerUser').and.returnValue(of(user));
    component.email.setValue('sample@gmail.com');
    component.password.setValue('asd');
    component.category.setValue('Tribe');
    component.register();
    expect(component.email.value).toBe(user.email);
  });

  it('should display alert when register failed', () => {
    const error = new Error('Unable to handel');
    spyOn(window, 'alert');
    spyOn(userService, 'registerUser').and.returnValue(throwError(error));
    component.email.setValue('sample@gmail.com');
    component.password.setValue('asd');
    component.category.setValue('Tribe');
    component.register();
    expect(window.alert).toHaveBeenCalledWith
    ('Failed registering, confirm the email id is not already registered');
  });

  it('should display alert when email and password are empty', () => {
    spyOn(window, 'alert');
    component.email.setValue('');
    component.password.setValue('');
    component.category.setValue('Tribe');
    component.register();
    expect(window.alert).toHaveBeenCalledWith
    ('Please enter your email and desired password');
  });
});
