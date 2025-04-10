import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = "";
  email: string = "";
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam) => {
      this.name = queryParam.name;
      this.email = queryParam.email;
    })
  }

  GoToSignUp(): void {
    this.router.navigate(['/auth/signup']);
  }

  GoToBookDetails(id: number, authorId: number): void {
    this.router.navigate(['/public/book-details', id, 'author', authorId], { queryParams: { name: 'krunal', email: 'sample@gmail.com' } });
  }
}
