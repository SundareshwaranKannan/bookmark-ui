import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShortUrlModule} from './feature/short-url/short-url.module';
import {HttpClientModule} from '@angular/common/http';
import {UserModule} from './feature/user/user.module';
import {BookmarkUrlModule} from './feature/bookmark-url/bookmark-url.module';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BookmarksModule} from './feature/bookmarks/bookmarks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShortUrlModule,
    UserModule,
    BookmarkUrlModule,
    BookmarksModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
