import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ShortUrlModule} from './feature/short-url/short-url.module';
import {UserModule} from './feature/user/user.module';
import {BookmarkUrlModule} from './feature/bookmark-url/bookmark-url.module';
import {BookmarksModule} from './feature/bookmarks/bookmarks.module';
import {ModalModule} from 'ngx-bootstrap/modal';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ShortUrlModule,
        UserModule,
        BookmarkUrlModule,
        BookmarksModule,
        ModalModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
