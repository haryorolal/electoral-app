import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../../store';
import * as fromElection from '../../store/list';
import { Election } from '../../store/list';

import { regex, regexErrors, markFormGroupTouched } from 'src/app/shared/utils';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<fromRoot.State>,
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {value: Election} ) { }

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
        const updateElection = {...this.data.value, ...this.form.value}
        this.store.dispatch(new fromElection.Update(updateElection))
      }else{
        this.store.dispatch(new fromElection.Create(this.form.value))
      }
      this.dialogRef.close();
    }else{
      markFormGroupTouched(this.form)
    }
  }

}
