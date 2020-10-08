import { Injectable } from '@angular/core';
import { Http } from '../http.service';
import { Book } from '../model/book.model';
import { Publisher } from '../model/publisher.model';
@Injectable({
  providedIn: "root"
})
export class Model {
  booksList: Array<Book> = []
  categoriesList: Array<any> = []
  publishersList: Array<Publisher> = []
  constructor(private Http: Http) {
    this.selectedBook = new Book();
  }
  selectedBook: Book

  getBooks() {
    this.Http.getData('books')
      .subscribe(result => {
        this.booksList = result.map(item => new Book(item))
      })
  }
  getCategories() {
    this.Http.getData('categories')
      .subscribe(result => {
        this.categoriesList = result;
      })

  }
  getPublishers() {
    this.Http.getData('publishers')
      .subscribe(result => {
        this.publishersList = result.map(item => new Publisher(item));
      })
  }

  addBook(book:Book) {
    return this.Http.postData('book', book)
  }
  updateBook(book:Book) {
    return this.Http.updateData('book', book)
  }
  deleteBook(book:Book) {
    return this.Http.deleteData(`book/${book.BOOK_PK}`)
  }
}