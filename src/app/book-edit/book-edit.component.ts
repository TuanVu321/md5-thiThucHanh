import {Component, OnInit} from '@angular/core';
import {IBook} from '../../IBook';
import {BookServiceService} from '../book-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: IBook;
  bookForm: FormGroup;

  constructor(private bookService: BookServiceService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: '',
      author: '',
      description: ''
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
      next => {
        this.book = next;
        this.bookForm.patchValue(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

  onSubmit(): void {
    const {value} = this.bookForm;
    const data = {
      ...this.book,
      ...value
    };
    this.bookService.editBook(data).subscribe(
      next => {
        this.router.navigate(['/blog']);
      },
      error => console.log(error)
    );
    alert('edit thanh cong');
  }
}

