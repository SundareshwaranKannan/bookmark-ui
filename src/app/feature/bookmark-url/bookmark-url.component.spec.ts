import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookmarkUrlComponent} from './bookmark-url.component';
import {CommonModule} from '@angular/common';
import {ShortUrlModule} from '../short-url/short-url.module';
import {RouterModule} from '@angular/router';
import {BookmarksModule} from '../bookmarks/bookmarks.module';
import {ModalModule} from 'ngx-bootstrap/modal';

describe('BookmarkUrlComponent', () => {
  let component: BookmarkUrlComponent;
  let fixture: ComponentFixture<BookmarkUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkUrlComponent ],
      imports: [
        CommonModule,
        ShortUrlModule,
        RouterModule,
        BookmarksModule,
        ModalModule.forRoot()
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
