import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../Models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss']
})
export class RecentBooksComponent implements OnInit {

  public recentBooks: BookModel[];
  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.recentBooks = this._bookService.getRecentBooks();

  }
}
