import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss'],
})
export class AddBookReactiveComponent implements OnInit {
  public titleErrorMessage: string;

  prices: any[] = [
    { value: 200, viewValue: '200' },
    { value: 100, viewValue: '100' },
    { value: 300, viewValue: '300' },
  ];

  currencies: any[] = [
    { value: 'USD', viewValue: 'US Dollar' },
    { value: 'INR', viewValue: 'Indian Rupees' },
  ];
  public addBookForm: FormGroup;

  constructor(private _bookService: BookService) {}

  ngOnInit(): void {
    this.intiForm();

    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe((x) => {
      this.validateTitleControl(titleControl as FormControl);
    });

    const formatTypeControl = this.addBookForm.get('formatType');
    formatTypeControl?.valueChanges.subscribe((x) => {
      this.formatTypeChanegd(x);
    });
  }

  updateFormValues(): void {
    this.addBookForm.patchValue({
      title: 'Krunal Parmar',
      author: 'default Krunal',
    });
  }

  private intiForm(): void {
    this.addBookForm = new FormGroup({
      title: new FormControl('Krunal', [
        Validators.required,
        Validators.minLength(7),
      ]),
      author: new FormControl(null, Validators.required),
      totalPages: new FormControl(),
      price: new FormGroup({
        currency: new FormControl(),
        value: new FormControl(),
      }),
      publishedOn: new FormControl(),
      isPublished: new FormControl(),
      docFormat: new FormControl(),
      pdfFormat: new FormControl(),
      formatType: new FormControl(),
    });
  }

  saveBook(): void {
    console.log(this.addBookForm.value);
    if (this.addBookForm.valid) {
      this._bookService.addBook(this.addBookForm.value);
    } else {
      alert('Validation error');
    }
  }

  private validateTitleControl(titleControl: FormControl): void {
    this.titleErrorMessage = '';
    if (titleControl.errors && (titleControl.touched || titleControl.dirty)) {
      if (titleControl.errors?.required) {
        this.titleErrorMessage = 'This is an required field.';
      } else if (titleControl.errors?.minlength) {
        this.titleErrorMessage =
          'Minimum length is ' + titleControl.errors?.minlength?.requiredLength;
      }
    }
  }

  private formatTypeChanegd(formatType: string): void {
    const docControl = this.addBookForm.get('docFormat');
    const pdfControl = this.addBookForm.get('pdfFormat');

    if (formatType === 'pdf') {
      pdfControl?.addValidators(Validators.required)
      docControl?.clearValidators();
    } 
    else if (formatType === 'doc') {
      docControl?.addValidators(Validators.required);
      pdfControl?.clearValidators();
    }
    else{
      
    }

    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }
}
