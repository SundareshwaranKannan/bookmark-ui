import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BookmarkService} from '../../service/bookmark.service';
import {ShortUrlRequest} from '../../shared/model/short-url-request';
import {ShortUrlResponse} from '../../shared/model/short-url-response';
import {Category} from '../../shared/enums/category';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.scss']
})
export class ShortUrlComponent implements OnInit {

  longUrlControl = new FormControl('');
  linkTypeControl = new FormControl('Group');
  urlCategoryControl = new FormControl('None');
  tribeControl = new FormControl('RPP');
  applicationControl = new FormControl('DMN');
  expiryDateControl = new FormControl(new Date());
  descriptionControl = new FormControl('');
  bookmarkTitle = new FormControl('');
  displayDate = false;
  bsValue = new Date();
  shortUrlRequest = {} as ShortUrlRequest;
  shortUrlResponse = {} as ShortUrlResponse;
  displayShortUrl = false;
  displayDescriptionError = false;

  constructor(
      private bookmarkService: BookmarkService,
      private userService: UserService
  ) { }

  ngOnInit() {
  }

  shortMyUrl() {
    this.shortUrlRequest.longUrl = this.longUrlControl.value;
    this.shortUrlRequest.userMail = this.userService.currentUser.email;
    if (this.linkTypeControl.value === 'Group') {
      this.shortUrlRequest.category = this.urlCategoryControl.value;
      this.shortUrlRequest.description = this.descriptionControl.value;
      this.shortUrlRequest.bookmarkTitle = this.bookmarkTitle.value;
      this.shortUrlRequest.tribe = this.urlCategoryControl.value === Category.TRIBE ?
          this.tribeControl.value : '';
      this.shortUrlRequest.application = this.urlCategoryControl.value === Category.APPLICATION ?
          this.applicationControl.value : '';
    } else {
      this.shortUrlRequest.description = '';
      this.shortUrlRequest.expiryDate = this.formatDate(new Date(this.expiryDateControl.value));
    }
    if (this.shortUrlRequest.description.length < 250) {
      this.displayDescriptionError = false;
      this.createShortUrl();
    } else {
      this.displayDescriptionError = true;
    }
  }

  createShortUrl() {
    this.bookmarkService.createShortUrl(this.shortUrlRequest).subscribe(
        data => {
          this.shortUrlResponse = data;
          this.displayShortUrl = true;
        }, error => {
          this.displayShortUrl = false;
        }
    );
  }

  reset() {
    this.longUrlControl.setValue('');
    this.expiryDateControl.setValue(new Date());
    this.descriptionControl.setValue('');
    this.shortUrlRequest = {} as ShortUrlRequest;
  }

  openWindow() {
    window.open(this.shortUrlResponse.longUrl);
  }

  onTypeChange() {
    this.displayDate = this.linkTypeControl.value !== 'Group';
  }

  formatDate(selectedDate) {
    const date = ('0' + selectedDate.getDate()).slice(-2);
    const month = ('0' + (selectedDate.getMonth() + 1)).slice(-2);
    const year = selectedDate.getFullYear();
    return (year + '-' + month + '-' + date);
  }

}
