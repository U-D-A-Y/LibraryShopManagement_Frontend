import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { BooksComponent } from './books/books.component';
import { SellsComponent } from './sells/sells.component';
import { CustomersComponent } from './customers/customers.component';
import { Routes, RouterModule } from '@angular/router'
import { ModalModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { AutoCompleteInputComponent } from './auto-complete-input/auto-complete-input.component';
import { CategoryComponent } from './category/category.component';
import { PublishersComponent } from './publishers/publishers.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '', component: ContainerComponent, children: [
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'books', component: BooksComponent },
      { path: 'categories', component: CategoryComponent },
      { path: 'publishers', component: PublishersComponent },
      { path: 'sells', component: SellsComponent },
      { path: 'sale-detail', component: SaleDetailComponent },
      { path: 'customers', component: CustomersComponent },
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashBoardComponent,
    BooksComponent,
    SellsComponent,
    CustomersComponent,
    LoginComponent,
    ContainerComponent,
    FilterPipe,
    AutoCompleteInputComponent,
    CategoryComponent,
    PublishersComponent,
    SaleDetailComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
