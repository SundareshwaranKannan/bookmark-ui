import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormControl} from '@angular/forms';
import {ShortUrlResponse} from '../../shared/model/short-url-response';
import {BookmarkService} from '../../service/bookmark.service';
import {Category} from '../../shared/enums/category';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  categoryFilter = new FormControl('None');
  tribeFilter = new FormControl('RPP');
  applicationFilter = new FormControl('DMN');
  modalRef: BsModalRef;
  staticBookmarks = [] as ShortUrlResponse[];
  bookmarks = [] as ShortUrlResponse[];
  displayLoading = true;

  constructor(
      private modalService: BsModalService,
      private bookmarkService: BookmarkService,
      private userService: UserService
  ) {}

  ngOnInit() {
    this.loadAllBookMarks();
  }

  loadAllBookMarks() {
    this.bookmarkService.getAllBookmarks().subscribe(
        data => {
          this.displayLoading = false;
          this.staticBookmarks = data;
          this.bookmarks = data;
        }, error => {
          this.displayLoading = false;
        }
    );
  }

  reloadBookmarks() {
    this.displayLoading = false;
    this.modalRef.hide();
    this.loadAllBookMarks();
  }

  onAddBookmarkClick(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
        template,
        Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  onFilterBookmarks() {
    switch (this.categoryFilter.value) {
      case Category.NONE: {
        this.bookmarks = this.staticBookmarks;
        break;
      }

      case Category.USER: {
        console.log(this.userService.currentUser.email);
        this.bookmarks = this.staticBookmarks.filter(
            bookmark => bookmark.userMail === this.userService.currentUser.email);
        break;
      }

      case Category.TRIBE: {
        this.bookmarks = this.staticBookmarks.filter(
            bookmark => bookmark.tribe === this.tribeFilter.value);
        break;
      }

      case Category.APPLICATION: {
        this.bookmarks = this.staticBookmarks.filter(
            bookmark => bookmark.application === this.applicationFilter.value);
        break;
      }
    }
  }

}
