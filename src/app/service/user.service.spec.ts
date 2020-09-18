import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {User} from '../shared/model/user';
import {of} from 'rxjs';
import {UserLogin} from '../shared/model/user-login';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpClientSpy: {get: jasmine.Spy, post: jasmine.Spy};

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new UserService(httpClientSpy as any);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user details', () => {
    const expectedResponse = {} as User;
    expectedResponse.email = 'sample@gmail.com';
    httpClientSpy.get.and.returnValue(of(expectedResponse));
    service.getUserDetails('sample@gmail.com', 'asd', 'none').subscribe(
        actualResponse => expect(actualResponse).
        toEqual(expectedResponse, 'expected user details'), fail);
  });

  it('should register a new user', () => {
    const userLogin = {} as UserLogin;
    const expectedResponse = {} as User;
    expectedResponse.email = 'sample@gmail.com';
    httpClientSpy.post.and.returnValue(of(expectedResponse));
    service.registerUser(userLogin).subscribe(
        actualResponse => expect(actualResponse).
        toEqual(expectedResponse, 'expected user details'), fail);
  });
});
