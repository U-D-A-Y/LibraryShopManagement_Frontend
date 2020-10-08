import { Injectable } from '@angular/core';
import { Http } from '../http.service';
import { Category } from '../model/category.model';
@Injectable({
  providedIn: "root"
})
export class Model {
  categoriesList: Array<any> = []
  selectedCategory: Category
  constructor(private Http: Http) {
    this.selectedCategory = new Category();
  }
  


  getCategories() {
    this.Http.getData('categories')
      .subscribe(result => {
        this.categoriesList = result;
      })

  }
  

  addCategory(category:Category) {
    return this.Http.postData('category', category)
  }
  updateCategory(category:Category) {
    return this.Http.updateData('category', category)
  }
  deleteCategory(category:Category) {
    return this.Http.deleteData(`category/${category.CATEGORY_PK}`)
  }
}