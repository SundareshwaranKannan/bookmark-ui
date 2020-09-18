import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShortUrlResponse} from '../../../shared/model/short-url-response';
import {BookmarkService} from '../../../service/bookmark.service';

@Component({
  selector: 'bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.scss']
})
export class BookmarkCardComponent implements OnInit {

  @Input()
  bookmark: ShortUrlResponse;

  @Output()
  deleteBookmarkEmitter = new EventEmitter<boolean>();

  constructor(
      private bookmarkService: BookmarkService
  ) { }

  ngOnInit() {
  }

  editBookmark() {
    alert('This feature is not developed yet, Please try deleting and create new one');
  }

  deleteBookmark() {
    this.bookmarkService.deleteBookmark(this.bookmark.shortUrl).subscribe(
        data => {
          this.deleteBookmarkEmitter.emit(true);
        }
    );
  }

  getFavIcon(currentUrl: string) {
    const fullUrl = new URL(currentUrl);
    let url = fullUrl.protocol + '//' + fullUrl.hostname;
    if (fullUrl.port) {
      url = url + ':' + fullUrl.port;
    }
    return url + '/favicon.ico';
  }

  openWindow() {
    window.open(this.bookmark.longUrl);
  }

}
