import {Component, OnInit} from '@angular/core';
import {BookServiceService} from '../book-service.service';
import {IBook} from '../../IBook';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: IBook;

  constructor(private bookService: BookServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(book => {
      this.book = book;
    });
  }

}
