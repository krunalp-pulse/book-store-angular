import { Injectable } from '@angular/core';
import { BookModel } from '../Models/book.model';

@Injectable({
  "providedIn": "root"
})
export class BookService {

  constructor() { }

  public getBooks(): any[] {
    return [
      {
        "id": 1,
        "title": "Angular Fundamentals",
        "totalPages": 453,
        "author": "Ram Singh",
        "price": {
          "currency": "INR",
          "value": 199
        }
      },
      {
        "id": 2,
        "title": "Mastering React",
        "totalPages": 376,
        "author": "Anita Sharma",
        "price": {
          "currency": "USD",
          "value": 25.99
        }
      },
      {
        "id": 3,
        "title": "Vue.js for Beginners",
        "totalPages": 512,
        "author": "Rahul Mehta",
        "price": {
          "currency": "GBP",
          "value": 18.5
        }
      },
      {
        "id": 4,
        "title": "Advanced TypeScript",
        "totalPages": 290,
        "author": "Sophia Wilson",
        "price": {
          "currency": "AUD",
          "value": 32.99
        }
      },
      {
        "id": 5,
        "title": "JavaScript Essentials",
        "totalPages": 610,
        "author": "Liam Jones",
        "price": {
          "currency": "CAD",
          "value": 29.99
        }
      },
      {
        "id": 6,
        "title": "JavaScript Essentials",
        "totalPages": 610,
        "author": "Liam Jones",
        "price": {
          "currency": "CAD",
          "value": 29.99
        }
      },
      {
        "id": 7,
        "title": "JavaScript Essentials",
        "totalPages": 610,
        "author": "Liam Jones",
        "price": {
          "currency": "CAD",
          "value": 29.99
        }
      }
    ]
  }
  public getRecentBooks(): any[] {
    return [
      {
        "id": 1,
        "title": "Angular Fundamentals",
        "totalPages": 453,
        "author": "Ram Singh",
        "price": {
          "currency": "INR",
          "value": 199
        }
      },
      {
        "id": 2,
        "title": "Mastering React",
        "totalPages": 376,
        "author": "Anita Sharma",
        "price": {
          "currency": "USD",
          "value": 25.99
        }
      }
    ]
  }
}
