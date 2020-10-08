import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Category } from '../model/category.model';
import { Model } from './model.servcie';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {

  searchText;
  title: string = "";
  btnShowCon: number = 1
  modalRef: BsModalRef;
  constructor(
    // private modalService: BsModalService,
    public model: Model,
  ) { }

  ngOnInit(): void {
    this.loadCategoriesData();
  }


  loadCategoriesData() { this.model.getCategories() }
  addModal(modal) {
    this.title = "add book";
    this.btnShowCon = 2;
    this.model.selectedCategory = new Category()
    modal.show()
  }
  viewBookDetails(modal, book) {
    this.title = "Book Detail";
    this.btnShowCon = 1;
    this.model.selectedCategory =JSON.parse(JSON.stringify(book)) 
    modal.show()
  }

  updateBookDetails(modal, book) {
    this.title = "Update Book details";
    this.btnShowCon = 3;
    this.model.selectedCategory = JSON.parse(JSON.stringify(book))
    modal.show()
  }
  onClickDeleteModal(modal, book) {
    this.title = "Confirmation";
    this.btnShowCon = 4;
    this.model.selectedCategory = book
    modal.show()
  }
  onClickAddCategoryBtn(modal) {
    this.model.addCategory(this.model.selectedCategory)
    .subscribe(result=>{
      modal.hide();
      this.loadCategoriesData();
    })
  }
  onClickUpdateCategoryBtn(modal) {
    this.model.updateCategory(this.model.selectedCategory)
    .subscribe(result=>{
      modal.hide();
      this.loadCategoriesData();
    })
  }
  onClickDeleteCategoryBtn(deleteModal) {
    this.model.deleteCategory(this.model.selectedCategory)
      .subscribe(result => {
        deleteModal.hide()
        this.loadCategoriesData();
      })
  }



}
