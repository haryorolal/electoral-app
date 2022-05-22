import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { ResultInterface, UserInterface } from 'src/app/models/backend';
import { NotificationService } from 'src/app/services';
import { markFormGroupTouched } from 'src/app/shared';
import { Elections } from 'src/app/store/elections';
import * as fromRoot from '../../../../../store';
import * as fromUser from '../../../../../store/user';
import * as fromCandidate from '../store/electResultList';

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
  @Input() duration
  voteDate

  currentDate: Date
  @Input() candidate
  form: FormGroup;
  addActiveVoteToUser: FormGroup

  constructor(private fb: FormBuilder, private store: Store<fromRoot.State>, private notifyService: NotificationService) { }

  ngOnInit(): void {
    //this.store.dispatch(new fromCandidate.Read())
    this.store.pipe(select(fromUser.getUser)).subscribe(res => {
      this.user = res;
      //console.log(this.user.isVoted = false)
    })

    this.setFormState();
    this.currentDate = new Date()

    for(let i = 0; i < this.duration.length; i++){
      this.voteDate = this.duration[i]
    }

  }

 

  setFormState(): void{
    this.form = this.fb.group({
      id: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }]
    });

    this.addActiveVoteToUser = this.fb.group({
      isVoted: [true]
    })
  }

  onSubmit(): void{   
    if(this.form.valid){ 
      //if(this.user.uid){
        for(let i = 0; i < this.candidate.length; i++){
          if(this.candidate[i].id === this.form.get('id').value){             
              const updateOn = {...this.candidate[i], ...this.form.value}
              this.store.dispatch(new fromCandidate.Update(updateOn)) 
              this.notifyService.success("You just casted your vote");
              this.UpdateToUserIfVoted();
              this.form.reset();
              //this.isVoted = true
          }
        }
      //}
    }else{
      markFormGroupTouched(this.form)
    }   
  }

  UpdateToUserIfVoted(){
    if(this.addActiveVoteToUser.valid){
      const updateOn = {...this.user, ...this.addActiveVoteToUser.value};
      this.store.dispatch(new fromUser.Update(updateOn))
      console.log(updateOn)
    }
    
  }
 

}
