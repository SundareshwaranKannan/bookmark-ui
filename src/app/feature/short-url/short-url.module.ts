import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShortUrlComponent} from './short-url.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {AlertModule} from 'ngx-bootstrap/alert';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ShortUrlComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    AlertModule
  ],
  exports: [
    ShortUrlComponent
  ]
})
export class ShortUrlModule { }
