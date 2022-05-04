import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { markFormGroupTouched } from 'src/app/shared';
import * as fromRoot from '../../../../../store';
import * as fromStates from '../../store/list'
import { States } from '../../store/list';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<fromRoot.State>, private matdialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: {value: States} ) { }

  ngOnInit(): void {
    this.setFormState();
  }



  setFormState(): void{
    this.form = this.fb.group({
      name: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }]
    });
    if(this.data.value){
      this.form.patchValue(this.data.value)
    }
  }

  onSubmit(): void{
    if(this.form.valid){
      if(this.data.value){
        const updateStates = {...this.data.value, ...this.form.value};
        this.store.dispatch(new fromStates.Update(updateStates))
      }else{
        this.store.dispatch(new fromStates.Create(this.form.value))
      }
      this.matdialogRef.close()
    }else{
      markFormGroupTouched(this.form)
    }
    
  }

}
