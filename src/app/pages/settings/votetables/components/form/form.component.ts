import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { markFormGroupTouched } from 'src/app/shared';
import { Elections } from 'src/app/store/elections';
import * as fromRoot from '../../../../../store';
import * as fromElection from '../../../../../store/elections';
import * as fromCandidate from '../../store/electList'
import { CandidateResult } from '../../store/electList';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  Elections$: Observable<fromElection.Elections>
  election: Elections
  form: FormGroup;
  

  constructor(private fb: FormBuilder, private store: Store<fromRoot.State>, private matdialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: {value: CandidateResult} ) { }

  ngOnInit(): void {
    this.store.dispatch(new fromElection.Read());
    this.Elections$ = this.store.pipe(select(fromElection.getElectionList))
    this.Elections$.subscribe((response) => {
      this.election = response
    });   
    
    this.setFormState();
  }



  setFormState(): void{
    this.form = this.fb.group({
      name: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      positions: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      party: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      duration: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      /*enddate: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }]*/
    });
    if(this.data.value){
      this.form.patchValue(this.data.value)
    }

  }

  
  onSubmit(): void{
    if(this.form.valid){
      if(this.data.value){
        const updateVotes = {...this.data.value, ...this.form.value};
        this.store.dispatch(new fromCandidate.Update(updateVotes))
      }else{
        this.store.dispatch(new fromCandidate.Create(this.form.value))
      }
      this.matdialogRef.close()
    }else{
      markFormGroupTouched(this.form)
    }
    
  }
}