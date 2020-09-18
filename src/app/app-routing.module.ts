import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookmarkUrlComponent} from './feature/bookmark-url/bookmark-url.component';
import {UserComponent} from './feature/user/user.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'bookmark-url',
    component: BookmarkUrlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
