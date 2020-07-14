import {Component, OnInit} from '@angular/core';
import {BookServiceService} from '../book-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-creat',
  templateUrl: './book-creat.component.html',
  styleUrls: ['./book-creat.component.css']
})
export class BookCreatComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private bookService: BookServiceService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: '',
      author: '',
      description: ''
    });
  }

  onSubmit(): void {
    const {value} = this.bookForm;
    this.bookService.createBook(value)
      .subscribe(next => {
        this.bookForm.reset({
          title: '',
          author: '',
          description: ''
        });
        alert('them thanh cong');
      });
  }
}
