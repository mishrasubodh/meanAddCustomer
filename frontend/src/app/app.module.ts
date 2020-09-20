import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
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
import { RedgreenDirective } from './directivs/redgreen.directive';
import { BlueDirective } from './directivs/blue.directive';
import { EditusermodalComponent } from './modal/editusermodal/editusermodal.component';
import { DeleteusermodalComponent } from './modal/deleteusermodal/deleteusermodal.component';
import { UsersComponent } from './users/users.component';
import {GlobalService} from './global.service'

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
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    //dialogbox,
    RedgreenDirective,
    BlueDirective,
    EditusermodalComponent,
    DeleteusermodalComponent,
    UsersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    BrowserAnimationsModule,
    MeterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
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
