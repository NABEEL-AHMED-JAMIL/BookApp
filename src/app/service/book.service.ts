import { Book } from "../model/book";
import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BookService{

    private books: FirebaseListObservable<Book[]>;

    constructor(private afd: AngularFireDatabase) {}
    
    // get the all book
    public getBooks(): any {}
    
    public getBook(isbn: String): any {}
    
    // update the book during shoping
    public updateBook(book: Book): void {}
    
    // add the new book
    public addNewBook() { 
        console.log("Book create");
        this.books = this.afd.list('/books');
        this.books.push(BOOKS);

    }
    
    public deleteBook(book: Book) { }
  
}


const BOOKS: Book[] = [

    { id: 11, name: 'Mr. Nice', author: "pakista", isbn: "123-456-789", noCopies: 10, price: 25.00 },
    { id: 12, name: 'Narco', author: "pakista", isbn: "123-456-789", noCopies: 10, price: 25.00 },
    { id: 13, name: 'Bombasto', author: "pakista", isbn: "123-456-789", noCopies: 10, price: 25.00 },
    { id: 14, name: 'Celeritas', author: "pakista", isbn: "123-456-789", noCopies: 10, price: 25.00 },
    { id: 15, name: 'Magneta', author: "pakista", isbn: "123-456-789", noCopies: 10, price: 25.00 },
    { id: 16, name: 'RubberMan', author: "pakista", isbn: "123-456-789", noCopies: 10, price: 25.00 },
    { id: 17, name: 'Dynama', author: "pakista", isbn: "123-456-789", noCopies: 10, price: 25.00 },
    { id: 18, name: 'Dr IQ', author: "pakista", isbn: "123-456-789", noCopies: 10, price: 25.00 },
    { id: 19, name: 'Magma', author: "pakista", isbn: "123-456-789", noCopies: 10, price: 25.00 },
    { id: 20, name: 'Tornado', author: "pakista", isbn: "123-456-789", noCopies: 10, price: 25.00 }
  ];