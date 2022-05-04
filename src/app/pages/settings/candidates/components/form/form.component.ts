import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { regexErrors, regex, markFormGroupTouched } from 'src/app/shared';
import * as fromRoot from '../../../../../store'
import * as fromElection from '../../../../../store/elections';
import * as fromCandidate from '../../store/list';
import { Elections } from '../../../../../store/elections';
import { Candidate } from '../../store/list';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup
  Election$: Observable<fromElection.Elections>
  election: Elections
  regexErrors = regexErrors


  constructor(private fb: FormBuilder, private store: Store<fromRoot.State>, 
    private dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: {value: Candidate}) { }

  ngOnInit(): void {
    this.store.dispatch(new fromElection.Read());
    this.Election$ = this.store.pipe(select(fromElection.getElectionList))
    this.Election$.subscribe((response) => {
      this.election = response
    });    

    this.setformState();
  }

  setformState(): void{
    this.form = this.fb.group({
      photoUrl: [null],

      name:[null, {
        updateOn: 'blur', validators:[
          Validators.required,
        ]
      }],

      electionType: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],

      localGovernment: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],

      party: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],

      state: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],

      position: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }]       
    });
    if(this.data.value){
      return this.form.patchValue(this.data.value)
    }
  }

  onSubmit(): void{
    if(this.form.valid){
      if(this.data.value){
        const updateOn = {...this.data.value, ...this.form.value}
        this.store.dispatch(new fromCandidate.Update(updateOn))
      }else{
        this.store.dispatch(new fromCandidate.Create(this.form.value))
      }
      this.dialogRef.close();
    }else{
      markFormGroupTouched(this.form)
    }
  }

}
