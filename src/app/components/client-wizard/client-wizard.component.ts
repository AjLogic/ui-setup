import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAccordion } from '@angular/material/expansion';
@Component({
  selector: 'app-client-wizard',
  templateUrl: './client-wizard.component.html',
  styleUrls: ['./client-wizard.component.css']
})
export class ClientWizardComponent implements OnInit {


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  forthFormGroup:FormGroup;
  fifthFormGroup:FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  organisation: Organisation[] = [];
  rolesSU: Role[] = [];
  rolesKW: Role[] = [];
  feature:string[] = ['Feature1','Feature2'];

  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      createSUApp:[]
    });
    this.forthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      createSUApp:[]
    });
    this.fifthFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }
  
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.organisation.push({name: value.trim()});
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Organisation): void {
    const index = this.organisation.indexOf(fruit);

    if (index >= 0) {
      this.organisation.splice(index, 1);
    }
  }

  addRoles(event: MatChipInputEvent,roleType:string): void {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || '').trim()) {
      if(roleType === 'su'){
        this.rolesSU.push({name: value.trim()});
      }else{
        this.rolesKW.push({name: value.trim()});
      }
        
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeRoles(fruit: Role , roleType:string): void {
    if(roleType === 'kw'){
        const index = this.rolesKW.indexOf(fruit);    
        if (index >= 0) {
          this.rolesKW.splice(index, 1);
        }
      
      }else{
        const index = this.rolesSU.indexOf(fruit);    
        if (index >= 0) {
          this.rolesSU.splice(index, 1);
        }
      }
  }



}
export class Organisation {
  name:string;
}
export class Role {
  name:string;
}