import { Component, OnInit, Output } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  
  public data: number;

  constructor(private _testService: TestService) { }

  ngOnInit(): void {
  }
  public btnClick(): void{
    // this.myData.emit('This text is from child component');
    this._testService.myData = "This text is from child component";
  }
}
