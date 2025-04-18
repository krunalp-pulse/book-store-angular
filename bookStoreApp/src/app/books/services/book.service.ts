import { Injectable } from '@angular/core';
import { BookModel } from '../Models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private allBooks = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      totalPages: 453,
      author: 'Ram Singh',
      price: {
        currency: 'INR',
        value: 199,
      },
    },
    {
      id: 2,
      title: 'Mastering React',
      totalPages: 376,
      author: 'Anita Sharma',
      price: {
        currency: 'USD',
        value: 25.99,
      },
    }
  ];

  constructor() {}

  public addBook(bookModel: BookModel): void {
    this.allBooks.push(bookModel);
  }

  public getBooks(): any[] {
    return this.allBooks;
  }

  public getRecentBooks(): any[] {
    return [
      {
        id: 1,
        title: 'Angular Fundamentals',
        totalPages: 453,
        author: 'Ram Singh',
        price: {
          currency: 'INR',
          value: 199,
        },
      },
      {
        id: 2,
        title: 'Mastering React',
        totalPages: 376,
        author: 'Anita Sharma',
        price: {
          currency: 'USD',
          value: 25.99,
        },
      },
    ];
  }
}
