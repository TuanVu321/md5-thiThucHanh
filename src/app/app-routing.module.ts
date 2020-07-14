import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookComponent} from './book/book.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookCreatComponent} from './book-creat/book-creat.component';
import {BookEditComponent} from './book-edit/book-edit.component';


const routes: Routes = [
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'book/:id',
    component: BookDetailComponent
  },
  {
    path: 'creat',
    component: BookCreatComponent
  },
  {
    path: 'edit/:id',
    component: BookEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
