import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { BookService } from '../../app/service/book.service';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private bookService:BookService) {
    this.bookService.addNewBook();
  }


}
