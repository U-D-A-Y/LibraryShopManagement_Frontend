import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Book } from '../model/book.model';
import { Model } from './model.servcie';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
  searchText;
  title: string = "";
  btnShowCon: number = 1
  modalRef: BsModalRef;
  constructor(
    // private modalService: BsModalService,
    public model: Model,
  ) { }

  ngOnInit(): void {
    this.LoadBooksData();
    this.loadCategoriesData();
    this.loadPublishersData();
  }

  // showModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  //   console.log(this.modalRef)
  // }

  // closeModal(template: TemplateRef<any>) {
  //   this.modalRef.hide();

  // }

  LoadBooksData() { this.model.getBooks() }
  loadCategoriesData() { this.model.getCategories() }
  loadPublishersData() { this.model.getPublishers() }
  addModal(modal) {
    this.title = "add book";
    this.btnShowCon = 2;
    this.model.selectedBook = new Book()
    modal.show()
  }
  viewBookDetails(modal, book) {
    this.title = "Book Detail";
    this.btnShowCon = 1;
    this.model.selectedBook = book
    modal.show()
  }

  updateBookDetails(modal, book) {
    this.title = "Update Book details";
    this.btnShowCon = 3;
    this.model.selectedBook = book
    modal.show()
  }
  onClickDeleteModal(modal, book) {
    this.title = "Confirmation";
    this.btnShowCon = 4;
    this.model.selectedBook = book
    modal.show()
  }
  onClickAddBookBtn(modal) {
    this.model.addBook(this.model.selectedBook)
    .subscribe(result=>{
      modal.hide();
      this.LoadBooksData();
    })
  }
  onClickDeleteBookBtn(deleteModal) {
    this.model.deleteBook(this.model.selectedBook)
      .subscribe(result => {
        deleteModal.hide()
        this.LoadBooksData();
      })
  }


}
