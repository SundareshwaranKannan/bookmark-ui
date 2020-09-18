import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookmarksComponent} from './bookmarks.component';
import {ShortUrlModule} from '../short-url/short-url.module';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {AlertModule} from 'ngx-bootstrap/alert';
import {BookmarkCardComponent} from './bookmark-card/bookmark-card.component';


@NgModule({
  declarations: [BookmarksComponent, BookmarkCardComponent],
  imports: [
    CommonModule,
    ShortUrlModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    AlertModule,
    ModalModule.forRoot()
  ],
  exports: [
      BookmarksComponent
  ]
})
export class BookmarksModule { }
