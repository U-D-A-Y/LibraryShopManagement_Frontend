import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { BooksComponent } from './books/books.component';
import { SellsComponent } from './sells/sells.component';
import { CustomersComponent } from './customers/customers.component';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { AutoCompleteInputComponent } from './auto-complete-input/auto-complete-input.component';
import { CategoryComponent } from './category/category.component';
import { PublishersComponent } from './publishers/publishers.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './auth.guard';
import { CardComponent } from './card/card.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '', component: ContainerComponent, children: [
      { path: 'dashboard', component: DashBoardComponent ,canActivate: [AuthGuard]},
      { path: 'books', component: BooksComponent,canActivate: [AuthGuard] },
      { path: 'categories', component: CategoryComponent,canActivate: [AuthGuard] },
      { path: 'publishers', component: PublishersComponent,canActivate: [AuthGuard] },
      { path: 'sells', component: SellsComponent,canActivate: [AuthGuard] },
      { path: 'sale-detail', component: SaleDetailComponent,canActivate: [AuthGuard] },
      { path: 'customers', component: CustomersComponent ,canActivate: [AuthGuard]},
    ]
  },
  { path: '**', redirectTo: '' }
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
    CardComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
