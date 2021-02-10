import { Component, OnInit, Input } from "@angular/core";

import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import { Customer } from './customer'

import { HttpService } from './appform.service';


@Component({
    selector: 'app-form-child',
    templateUrl: './appform.component.html'
})

export class AppFormComponent implements OnInit {
    customerForm: FormGroup;  // root form group instance
    customer: Customer = new Customer();  // define the data model

    public data: string;
    public like: string;
    public newC: string;

    private validationMessages = {
        required: 'Please enter your favorite way...',
        waysProgramming: 'Please enter a your favorite way.'
      };
    
    constructor(private fb: FormBuilder, private _HttpService: HttpService ){ }


    ngOnInit(){  // lifecycle hook.
        // initialize form model
        // this.customerForm = new FormGroup({
        //     likeProgramming: new FormControl(),
        //     waysProgramming: new FormControl()  // 
        // });

        // changed to formbuilder and added validator
        this.customerForm = this.fb.group({
            likeProgramming: 0,
            waysProgramming: ['', [Validators.required, Validators.minLength(3)]],
            newStuff: '',
            
        });
      

        this.customerForm.get('likeProgramming').valueChanges.subscribe(val => {
            //console.log(val);    
            this.getLike(val);
        });
    
        this.customerForm.get('newStuff').valueChanges.subscribe(val => {
            this.getNew(val);
        });
    }

    public getNew(v): void {
        this.newC = this._HttpService.getNew();
        console.log(this.newC + " : " + v);
    }


    public getLike(v): void {
        this.like = this._HttpService.getLike();
        console.log(this.like + " : " + v);
    }

    public getData(): void {
        this.data = this._HttpService.getData();
        console.log(this.data);
    }


     // button on page to populate fields
  populateTestData(): void {
   
    this.customerForm.patchValue({
        likeProgramming: 4,
        waysProgramming: 'Variety',
     
        
    });
  }

    
    // form button click 
    save() {

        this.getData();

       // console.log(this.customerForm);
       // console.log('Save : ' + JSON.stringify(this.customerForm.value));
    }

    
}

