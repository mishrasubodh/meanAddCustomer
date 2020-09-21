import { Component, OnInit, Output,ViewChild ,Inject, ChangeDetectorRef,} from '@angular/core';
import {UsersService } from '../users.service'
import {Config } from '../config'
import {MatPaginator, MatTableDataSource,MatDialogRef, MatDialog, MAT_DIALOG_DATA} from '@angular/material';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {BasicService } from "../basic.service"
import { EditusermodalComponent } from '../modal/editusermodal/editusermodal.component';
import { DeleteusermodalComponent } from '../modal/deleteusermodal/deleteusermodal.component';



export interface PeriodicElement {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  button: string;
  button1: string;
}
export interface DialogData {
  animal: string;
  name: string;
}
export interface Deleteuserid {
  id: number;
  
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  p:number = 1;
  displayedColumns: string[] = ['_id','firstName', 'lastName', 'username', 'button', 'button1'];
  dataSource; 
  id: any;
  onlydata: string;
    constructor(
      public service:UsersService,
    public basicservice :BasicService,
      public config :Config,
      private dialog: MatDialog,
      private Router:Router,

     //  private cd:ChangeDetectorRef
     
    ) {
      const users = Array.from({length: 100});
    this. getallCustomersdata();
    this.basicservice.telicast.subscribe((data)=>{
 
      this.onlydata= data
    })
     }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  changData(obj){
    this.basicservice.edit(obj)

  }
getallCustomersdata(){     
  this.service.getallCustomersdata().subscribe((data)=>{
    this.dataSource = data;
    // this.con.markForCheck();
  })
}

  
openDialog(id) {

this.service.getdatabyid(id).then((dataPassed)=>{

  const dialogRef = this.dialog.open(EditusermodalComponent, {
    width: '660px',
    height: '490px',
    panelClass: 'EditusermodalComponent',
    data: {dataPassed },
    position: {
      top: '50px'
    }
  });

  dialogRef.afterClosed().subscribe((result) => {
    this.id = result;
  
    if(this.id!==undefined|| this.id!==null){
      this.getallCustomersdata();
    }
  //  window.location.reload();
  });
})
}

deletedata(id){
 
  const dialogRef = this.dialog.open(DeleteusermodalComponent, {
    width: '410px',
    height: '200px',
    panelClass: 'DeleteusermodalComponent',
    data: {id},
    position: {
      top: '130px'
    }
  });

  dialogRef.afterClosed().subscribe((result) => {
    this.id = result; 
   if(this.id !== undefined || this.id !==null){
    this.getallCustomersdata();
   }
  });

}
backtohome(){
 this.Router.navigate(['user'])
}
gotoAddCustomer(){
  this.Router.navigate(['adCustomer'])
}

}



