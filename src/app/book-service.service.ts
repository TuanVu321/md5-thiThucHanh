import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {IBook} from '../IBook';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private readonly URL = 'http://localhost:3000/books';
  shouldRefresh = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.URL);
  }

  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.URL, book);
  }

  getBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.URL}/${id}`);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

  editBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.URL}/${book.id}`, book);
  }
}
