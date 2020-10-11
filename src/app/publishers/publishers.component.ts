import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Publisher } from '../model/publisher.model';
import { Model } from './model.servcie';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
})
export class PublishersComponent implements OnInit {

  searchText;
  title: string = "";
  btnShowCon: number = 1
  modalRef: BsModalRef;
  constructor(public model: Model) { }

  ngOnInit(): void {
    this.loadPublishersData();
  }

  loadPublishersData() { this.model.getPublishers() }
  addModal(modal) {
    this.title = "add Publisher";
    this.btnShowCon = 2;
    this.model.selectedPublisher = new Publisher()
    modal.show()
  }
  viewPublisherDetails(modal, publisher) {
    this.title = "Publisher Detail";
    this.btnShowCon = 1;
    this.model.selectedPublisher = JSON.parse(JSON.stringify(publisher));
    modal.show()
  }

  updatePublisherDetails(modal, publisher) {
    this.title = "Update Publisher details";
    this.btnShowCon = 3;
    this.model.selectedPublisher = JSON.parse(JSON.stringify(publisher));
    modal.show()
  }
  onClickPublisherDelete(modal,publisher) {
    this.title = "Confirmation";
    this.btnShowCon = 4;
    this.model.selectedPublisher = JSON.parse(JSON.stringify(publisher));
    modal.show()
  }
  onClickAddBtn(modal) {
    this.model.addPublisher(this.model.selectedPublisher)
    .subscribe(result=>{
      modal.hide();
      this.loadPublishersData();
    })
  }
  onClickUpdateBtn(modal) {
    this.model.updatePublisher(this.model.selectedPublisher)
    .subscribe(result=>{
      modal.hide();
      this.loadPublishersData();
    })
  }
  onClickDeleteBtn(deleteModal) {
    this.model.deletePublisher(this.model.selectedPublisher)
      .subscribe(result => {
        deleteModal.hide()
        this.loadPublishersData();
      })
  }


}