import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookmarkUrlComponent} from './bookmark-url.component';
import {ShortUrlModule} from '../short-url/short-url.module';
import {RouterModule} from '@angular/router';
import {BookmarksModule} from '../bookmarks/bookmarks.module';
import {ModalModule} from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [BookmarkUrlComponent],
  imports: [
    CommonModule,
    ShortUrlModule,
    RouterModule,
    BookmarksModule,
    ModalModule.forRoot()
  ],
  exports: [
    BookmarkUrlComponent
  ]
})
export class BookmarkUrlModule { }
