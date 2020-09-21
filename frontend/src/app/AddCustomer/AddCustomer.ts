import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { BasicService } from '../basic.service'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { UsersService } from '../users.service'
import { Config } from '../config'


@Component({ templateUrl: 'AddCustomer.html' })
export class AddCustomerComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    registrationData: boolean;
    message: string;
    test;
    addCustomer: any;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private basicservice: BasicService,
        private userservice: UsersService, private config: Config

    ) {

    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Name: ['', Validators.required],
            age: ['', Validators.required],
            Address: ['', Validators.required],
            phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
            dateOfBirth: ['', Validators.required]
        });

        this.basicservice.telicast.subscribe((data) => {
            this.message = data;
        });

    }
    editData() {
        this.basicservice.edit(this.test);
        this.router.navigate(['/registration']);

    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        this.loading = true;

        if (this.registerForm.invalid) {
            this.loading = false;
            return;
        }

        this.addCustomer = this.registerForm.value

        this.customerAdd(this.addCustomer);


    }
    customerAdd(addCustomer) {
        this.loading = false;
        this.userservice.customerAdd(addCustomer).subscribe((data) => {

            if (data['message'] == 'Registration SuccessFull') {
                this.config.openSnackBar('Registration Successfully', true);
                this.router.navigate(['user'])
            }

        })
    }

}
