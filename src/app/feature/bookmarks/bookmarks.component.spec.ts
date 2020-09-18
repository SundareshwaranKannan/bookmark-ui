import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookmarksComponent} from './bookmarks.component';
import {CommonModule} from '@angular/common';
import {ShortUrlModule} from '../short-url/short-url.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ModalModule} from 'ngx-bootstrap/modal';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BookmarkCardComponent} from './bookmark-card/bookmark-card.component';

describe('BookmarksComponent', () => {
  let component: BookmarksComponent;
  let fixture: ComponentFixture<BookmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksComponent, BookmarkCardComponent ],
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
    fixture = TestBed.createComponent(BookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
