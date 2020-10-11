import { Injectable } from '@angular/core';
import { Http } from '../http.service';
import { Publisher } from '../model/publisher.model';
@Injectable({
  providedIn: "root"
})
export class Model {
  selectedPublisher: Publisher
  publishersList: Array<Publisher> = []
  constructor(private Http: Http) {
    this.selectedPublisher = new Publisher();
  }

  getPublishers() {
    this.Http.getData('publishers')
      .subscribe(result => {
        this.publishersList = result.map(item => new Publisher(item));
      })
  }

  addPublisher(publisher:Publisher) {
    return this.Http.postData('publisher', publisher)
  }
  updatePublisher(publisher:Publisher) {
    return this.Http.updateData('publisher', publisher)
  }
  deletePublisher(publisher:Publisher) {
    return this.Http.deleteData(`publisher/${publisher.PUBLISHER_PK}`)
  }
}