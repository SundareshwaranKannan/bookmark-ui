import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../shared/model/user';
import {UserLogin} from '../shared/model/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://sg-digital.herokuapp.com/digital-users';
  currentUser = {} as User;

  constructor(private http: HttpClient) { }

  getUserDetails(email: string, password: string, category: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('email', email);
    params = params.append('password', password);
    params = params.append('category', category);
    return this.http.get<any>(this.url + '/validate', {params});
  }

  registerUser(userRequest: UserLogin): Observable<any> {
    return this.http.post<any>(this.url + '/create', userRequest);
  }
}
