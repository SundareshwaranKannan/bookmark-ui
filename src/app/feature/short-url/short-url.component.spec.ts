import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShortUrlComponent} from './short-url.component';
import {BookmarkService} from '../../service/bookmark.service';
import {UserService} from '../../service/user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ShortUrlResponse} from '../../shared/model/short-url-response';
import {ShortUrlRequest} from '../../shared/model/short-url-request';
import {of, throwError} from 'rxjs';

describe('ShortUrlComponent', () => {
  let component: ShortUrlComponent;
  let fixture: ComponentFixture<ShortUrlComponent>;
  let bookmarkService: BookmarkService;
  let userService: UserService;
  const shortUrlResponse = {} as ShortUrlResponse;
  shortUrlResponse.bookmarkTitle = 'Digital stack';
  const shortUrlRequest = {} as ShortUrlRequest;
  shortUrlRequest.bookmarkTitle = 'Digital stack';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortUrlComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot(),
        AlertModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortUrlComponent);
    component = fixture.componentInstance;
    bookmarkService = TestBed.inject(BookmarkService);
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a short url request', () => {
    spyOn(component, 'createShortUrl').and.callThrough();
    component.urlCategoryControl.setValue('Tribe');
    component.tribeControl.setValue('RPP');
    component.applicationControl.setValue('DMN');
    component.shortMyUrl();
    expect(component.createShortUrl).toHaveBeenCalled();
  });

  it('should fail in creating short url when description is long', () => {
    component.tribeControl.setValue('RPP');
    component.applicationControl.setValue('DMN');
    component.urlCategoryControl.setValue('Application');
    component.descriptionControl.setValue('Societe Generale is one of the leading financial' +
        ' services groups in Europe. Based on a universal banking model, the Group combines financial' +
        ' strength with a strategy of sustainable growth, putting its resources to work to finance' +
        ' the economy and its clients\' projects.');
    component.shortMyUrl();
    expect(component.displayDescriptionError).toBe(true);
  });

  it('should have called format date for non-group urls', () => {
    spyOn(component, 'createShortUrl').and.callThrough();
    spyOn(component, 'formatDate').and.callThrough();
    component.linkTypeControl.setValue('Non-group');
    component.shortMyUrl();
    expect(component.formatDate).toHaveBeenCalled();
  });

  it('should have requested to create short urls', () => {
    spyOn(bookmarkService, 'createShortUrl').and.returnValue(of(shortUrlResponse));
    component.createShortUrl();
    expect(component.shortUrlResponse).toBe(shortUrlResponse);
  });

  it('should not display the short url card when the service call failed', () => {
    const error = new Error('Unable to handel');
    spyOn(bookmarkService, 'createShortUrl').and.returnValue(throwError(error));
    component.createShortUrl();
    expect(component.displayShortUrl).toBe(false);
  });

  it('should display date based on type change', () => {
    component.linkTypeControl.setValue('Non-group');
    component.onTypeChange();
    expect(component.displayDate).toBe(true);
  });

  it('should reset all the fields', () => {
    component.descriptionControl.setValue('sample');
    component.reset();
    expect(component.descriptionControl.value).toBe('');
  });

  it('should open the short url in new tab', () => {
    spyOn(window, 'open');
    component.shortUrlResponse.longUrl = 'https://www.google.com/';
    component.openWindow();
    expect(window.open).toHaveBeenCalledWith('https://www.google.com/');
  });
});
