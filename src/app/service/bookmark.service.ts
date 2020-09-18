import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ShortUrlRequest} from '../shared/model/short-url-request';
import {ShortUrlResponse} from '../shared/model/short-url-response';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  url = 'https://sg-digital.herokuapp.com/sg-digital';
  bookmarkUrl = 'https://sg-digital.herokuapp.com//digital-bookmarks';

  constructor(private http: HttpClient) { }

  createShortUrl(request: ShortUrlRequest): Observable<ShortUrlResponse> {
    return this.http.post<ShortUrlResponse>(this.url + '/create', request);
  }

  getAllBookmarks(): Observable<ShortUrlResponse[]> {
    return  this.http.get<ShortUrlResponse[]>(this.bookmarkUrl + '/bookmarks');
  }

  deleteBookmark(shortUrl): Observable<any> {
    return this.http.delete<any>(this.bookmarkUrl + '/' + shortUrl);
  }
}
