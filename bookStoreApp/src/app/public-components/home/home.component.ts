import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('authors') private childAuthor: AuthorsComponent;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.childAuthor.data = 16546594;
    }, 0);
  }
}
