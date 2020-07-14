import {Component, OnInit} from '@angular/core';
import {IBook} from '../../IBook';
import {BookServiceService} from '../book-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookList: IBook[] = [];
  count = 0;

  constructor(private bookService: BookServiceService) {
  }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(value => {
      this.bookList = value;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.bookList.length; i++) {
        this.count = this.count + 1;
      }
    });
    this.bookService.shouldRefresh.subscribe(result => {
      this.bookService.getAllBooks().subscribe(value => {
        this.bookList = value;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.bookList.length; i++) {
          this.count = this.count + 1;
        }
      });
    });
  }


  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(value => {
      this.bookService.shouldRefresh.next(),
        alert('xoa thanh cong');
    });
  }
}
