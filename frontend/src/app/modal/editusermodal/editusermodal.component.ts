import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Edituserdata } from '../../interfaces/edituserdata'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../../users.service'
import { error } from '@angular/compiler/src/util';
//import {HomeComponent} from '../../home/home.component'
@Component({
  selector: 'editusermodal',
  templateUrl: './editusermodal.component.html',
  styleUrls: ['./editusermodal.component.scss']
})
export class EditusermodalComponent implements OnInit {
  editabledata: any;
  loginForm = this.fb.group({
    Name: [null],
    age: [null],
    Address: [null],
    phoneNumber: [null],
    dateOfBirth: [null],
  });

  constructor(
    public dialogRef: MatDialogRef<EditusermodalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Edituserdata,
    private fb: FormBuilder,
    public service: UsersService,
    // private classCall:HomeComponent
  ) {

    this.editabledata = data['dataPassed']
  }
  onSubmit(): void {

    let obj = {
      "id": this.editabledata['_id'],
      "Name": this.editabledata['Name'],
      "age": this.editabledata['age'],
      "Address": this.editabledata['Address'],
      "phoneNumber": this.editabledata['phoneNumber'],
      "dateOfBirth": this.editabledata['dateOfBirth']
    }
    this.service.putdatabyid(obj).then((data) => {

      if (data !== undefined || data !== null) {
      
        this.dialogRef.close(data);
      }
    });


  }


  ngOnInit() {
  }

}
