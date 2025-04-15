import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookId: number = 12;
  authorId: number = 56;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.firstChild?.params.subscribe(params => {
   })
  }
}
