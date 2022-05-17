import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { markFormGroupTouched } from 'src/app/shared';
import { Position } from '../../store/positionList';
import * as fromRoot from '../../../../../store';
import * as fromPositions from '../../store/positionList';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder, private store: Store<fromRoot.State>, private dialogref: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: {value: Position} ) { }

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
        const updatePosition = {...this.data.value, ...this.form.value}
        this.store.dispatch(new fromPositions.Update(updatePosition))
      }else{
        this.store.dispatch(new fromPositions.Create(this.form.value))
      }
      this.dialogref.close();
    }else{
      markFormGroupTouched(this.form)
    }
  }

}
