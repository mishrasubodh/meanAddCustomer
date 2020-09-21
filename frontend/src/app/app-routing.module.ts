import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './AddCustomer/AddCustomer'
import { HomeComponent } from './home/home.component'
import { UsersComponent } from './users/users.component'
import { BarchartsComponent } from './barcharts/barcharts.component'
const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adCustomer', component: AddCustomerComponent },
  { path: 'user', component: UsersComponent },
  { path: 'barchart', component: BarchartsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
