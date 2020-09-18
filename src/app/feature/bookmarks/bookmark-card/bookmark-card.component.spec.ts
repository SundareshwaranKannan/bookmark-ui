import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookmarkCardComponent} from './bookmark-card.component';
import {CommonModule} from '@angular/common';
import {ShortUrlModule} from '../../short-url/short-url.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ModalModule} from 'ngx-bootstrap/modal';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ShortUrlResponse} from '../../../shared/model/short-url-response';

describe('BookmarkCardComponent', () => {
  let component: BookmarkCardComponent;
  let fixture: ComponentFixture<BookmarkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkCardComponent ],
      imports: [
        CommonModule,
        ShortUrlModule,
        FormsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot(),
        AlertModule,
        ModalModule.forRoot()
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkCardComponent);
    component = fixture.componentInstance;
    component.bookmark = {} as ShortUrlResponse;
    component.bookmark.longUrl = 'https://www.google.com/';
    component.bookmark.bookmarkTitle = 'Google';
    component.bookmark.shortUrl = 'Z015';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
