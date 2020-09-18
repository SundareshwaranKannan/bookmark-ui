import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bookmark-url',
  templateUrl: './bookmark-url.component.html',
  styleUrls: ['./bookmark-url.component.scss']
})
export class BookmarkUrlComponent implements OnInit {

  displayUrlShortener = true;
  displayBookmarks = false;
  constructor() { }

  ngOnInit(): void {
  }

  loadUrlShortener() {
    this.displayUrlShortener = true;
    this.displayBookmarks = false;
  }

  loadBookmarks() {
    this.displayUrlShortener = false;
    this.displayBookmarks = true;
  }

}
