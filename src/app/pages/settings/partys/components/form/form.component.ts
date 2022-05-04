import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Party } from '../../store/list';
import * as fromRoot from '../../../../../store';
import * as fromParty from '../../store/list';
import { markFormGroupTouched } from 'src/app/shared';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<fromRoot.State>, private dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: {value:Party}) { }

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
    })
    if(this.data.value){
      this.form.patchValue(this.data.value)
    }
  }

  onSubmit(): void{
    if(this.form.valid){
      if(this.data.value){
        const updateParty = {...this.data.value, ...this.form.value}
        this.store.dispatch(new fromParty.Update(updateParty))
      }else{
        this.store.dispatch(new fromParty.Create(this.form.value))
      }
      this.dialogRef.close();
    }else{
      markFormGroupTouched(this.form)
    }
  }

}
