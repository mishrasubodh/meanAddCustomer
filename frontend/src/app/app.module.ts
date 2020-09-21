import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './AddCustomer/AddCustomer';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MeterialModule} from './meterial/meterial.module'
import {  ReactiveFormsModule } from '@angular/forms';
import {Config } from './config'
import {UsersService} from './users.service'
import {HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http'
import {MyInterceptor} from './my-interceptor'
import {BasicService} from './basic.service'
import {MatPaginator} from '@angular/material/paginator'
//import {dialogbox } from  './home/home.component'
import {NgxPaginationModule} from 'ngx-pagination';
import { EditusermodalComponent } from './modal/editusermodal/editusermodal.component';
import { DeleteusermodalComponent } from './modal/deleteusermodal/deleteusermodal.component';
import {BarchartsComponent} from './barcharts/barcharts.component'
import { UsersComponent } from './users/users.component';
import {GlobalService} from './global.service'
import {ChartsModule} from 'ng2-charts'
abstract class ChangeDetectorRef {
  abstract markForCheck(): void
  abstract detach(): void
  abstract detectChanges(): void
  abstract checkNoChanges(): void
  abstract reattach(): void
}

@NgModule({

  declarations: [
    AppComponent,
    AddCustomerComponent,
    HomeComponent,
    //dialogbox,
    EditusermodalComponent,
    DeleteusermodalComponent,
    UsersComponent,
    BarchartsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    BrowserAnimationsModule,
    MeterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ChartsModule
  ],
  providers: [
    Config,UsersService,HomeComponent,BasicService,GlobalService,
     {
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi: true
  }
],
entryComponents: [
  EditusermodalComponent,
  DeleteusermodalComponent
],
  bootstrap: [AppComponent],
  exports:[HomeComponent]
})
export class AppModule { }
