import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../../store';
import * as fromLocal from '../../store/list';
import { Local } from '../../store/list';
import { markFormGroupTouched } from 'src/app/shared';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<fromRoot.State>,
    private dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: {value:Local}) { }

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
        const updateLocal = {...this.data.value, ...this.form.value}
        this.store.dispatch(new fromLocal.Update(updateLocal))
      }else{
        this.store.dispatch(new fromLocal.Create(this.form.value))
      }
      this.dialogRef.close();
    }else{
      markFormGroupTouched(this.form)
    }
  }

}
