import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../Models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  private _pageTitle: string = '';

  public set pageTitle(value: string) {
    this._pageTitle = value;
  }

  public get pageTitle() {
    return this._pageTitle;
  }

  public books: BookModel[] = [];
  constructor(public bookService: BookService) {
  }

  ngOnInit(): void {
    this.pageTitle = 'All Books';
    const allBooks = this.bookService.getBooks();

    allBooks.forEach(b => {
      var obj = new BookModel();
      obj.id = b.id;
      obj.author = b.author;
      obj.price = b.price;
      obj.title = b.title;
      obj.totalPages = b.totalPages;

      this.books.push(obj);
    })
    console.log(this.books);
  }

}
