import { Book } from "../model/book";
import {Injectable} from '@angular/core';

@Injectable()
export class BookService{

    // get the all book
    public getBooks(): any {}
    
    public getBook(isbn: String): any {}
    
    // update the book during shoping
    public updateBook(book: Book): void {}
    
    // add the new book
    public addNewBook(book: Book) { }
    
    //
    public deleteBook(book: Book) { }
  
}