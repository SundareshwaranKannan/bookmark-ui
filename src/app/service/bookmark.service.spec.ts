import {TestBed} from '@angular/core/testing';

import {BookmarkService} from './bookmark.service';
import {of} from 'rxjs';
import {ShortUrlResponse} from '../shared/model/short-url-response';
import {ShortUrlRequest} from '../shared/model/short-url-request';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BookmarkService', () => {
  let service: BookmarkService;
  let httpClientSpy: {get: jasmine.Spy, post: jasmine.Spy, delete: jasmine.Spy};

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);
    service = new BookmarkService(httpClientSpy as any);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmarkService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BookmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all bookmarks', () => {
    const expectedResponse = [] as ShortUrlResponse[];
    expectedResponse.push({} as ShortUrlResponse);
    expectedResponse[0].bookmarkTitle = 'Digital stack';
    httpClientSpy.get.and.returnValue(of(expectedResponse));
    service.getAllBookmarks().subscribe(
        actualResponse => expect(actualResponse).
        toEqual(expectedResponse, 'expected bookmark details'), fail);
  });

  it('should create new bookmarks', () => {
    const request = {} as ShortUrlRequest;
    request.bookmarkTitle = 'Digital stack';
    const expectedResponse = {} as ShortUrlResponse;
    expectedResponse.bookmarkTitle = 'Digital stack';
    httpClientSpy.post.and.returnValue(of(expectedResponse));
    service.createShortUrl(request).subscribe(
        actualResponse => expect(actualResponse).
        toEqual(expectedResponse, 'expected bookmark details'), fail);
  });

  it('should delete a bookmark', () => {
    const expectedResponse = true;
    httpClientSpy.delete.and.returnValue(of(true));
    service.deleteBookmark('Z012').subscribe(
        actualResponse => expect(actualResponse).
        toEqual(expectedResponse, 'expected delete operation'), fail);
  });
});
