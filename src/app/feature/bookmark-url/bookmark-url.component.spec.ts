import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookmarkUrlComponent} from './bookmark-url.component';

describe('BookmarkUrlComponent', () => {
  let component: BookmarkUrlComponent;
  let fixture: ComponentFixture<BookmarkUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkUrlComponent ]
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
