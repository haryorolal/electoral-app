import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { UserInterface } from 'src/app/models/backend';
import { NotificationService } from 'src/app/services';
import { markFormGroupTouched } from 'src/app/shared';
import { Elections } from 'src/app/store/elections';
//import * as fromResult from '../store1/electList'
import * as fromCandidate from '../store/electList'
import { Candidate } from '../store/electList';

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
  message: string
  //@Input() result
  @Input() candidate
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private notifyService: NotificationService) { }

  ngOnInit(): void {
    //this.store.dispatch(new fromResult.Read())
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
      /*if(this.isVoted){
        this.isVoted = true;
        this.message = "You have voted already, You can keep monitoring the result"
      }else{
        for(let i = 0; i < this.candidate.length; i++){
          if(this.candidate[i].id === this.form.get('id').value){             
              const updateOn = {...this.candidate[i], ...this.form.value}
              this.store.dispatch(new fromCandidate.Update(updateOn)) 
              this.notifyService.success("You just casted your vote");
              this.isVoted = false
          }
        }
      }*/
      for(let i = 0; i < this.candidate.length; i++){
        if(this.candidate[i].id === this.form.get('id').value){             
            const updateOn = {...this.candidate[i], ...this.form.value}
            this.store.dispatch(new fromCandidate.Update(updateOn)) 
            this.notifyService.success("You just casted your vote");
            this.form.reset();
            this.form.disable()
        }
      }
    }else{
      markFormGroupTouched(this.form)
    }   
  }

  
 

}
