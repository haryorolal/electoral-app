import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { UserInterface } from 'src/app/models/backend';
import { NotificationService } from 'src/app/services';
import { markFormGroupTouched } from 'src/app/shared';
import { Elections } from 'src/app/store/elections';
import * as fromCandidate from '../store/electResultList'
import { CandidateResult } from '../store/electResultList';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  @Input() elections: Elections
  @Input() user: UserInterface
  isVoted: boolean;
  //@Input() result
  @Input() candidate
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.store.dispatch(new fromCandidate.Read())
    this.setFormState();
  }

  setFormState(): void{
    this.form = this.fb.group({
      id: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }]
    })
  }

  onSubmit(): void{   
    if(this.form.valid){ 
      for(let i = 0; i < this.candidate.length; i++){
        if(this.candidate[i].id === this.form.get('id').value){             
            const updateOn = {...this.candidate[i], ...this.form.value}
            this.store.dispatch(new fromCandidate.Update(updateOn)) 
            this.notifyService.success("You just casted your vote");
            this.form.reset();
            //this.form.disable()
            this.isVoted = true
        }
      }
    }else{
      markFormGroupTouched(this.form)
    }   
  }
 

}
