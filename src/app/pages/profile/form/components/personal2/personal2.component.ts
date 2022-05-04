import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { StepperService } from '../stepper/services';
import { Observable, Subject, takeUntil } from 'rxjs';
import { regex, regexErrors } from 'src/app/shared';
import { markFormGroupTouched } from 'src/app/shared';
import { Dictionaries } from 'src/app/store/dictionaries';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { superA } from './roles/super-admin/super-admin.component';
import { AdminA } from './roles/admin/admin.component';
import { voterA } from './roles/voter/voter.component';

export interface Personal2FormInterface{
  roleId: string;
  role: superA | AdminA | voterA;
}

@Component({
  selector: 'app-personal2',
  templateUrl: './personal2.component.html',
  styleUrls: ['./personal2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Personal2Component implements OnInit, OnDestroy {

  @Input() value: Personal2FormInterface;
  @Input() dictionaries: Dictionaries;
  @Output() changed = new EventEmitter<Personal2FormInterface>();
  
  form: FormGroup
  regexErrors = regexErrors

  private destroy = new Subject<any>()

  constructor(private stepperService: StepperService, private fb: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.setFormState();

    //subscribe to the observable check to check the validity of the next step
    this.stepperService.check$.pipe(takeUntil(this.destroy)).subscribe(      
      (type) => {
        if(!this.form.valid){
          markFormGroupTouched(this.form);
          this.form.updateValueAndValidity();
          this.cdr.detectChanges();
        }else{
          this.changed.emit(this.form.value);
        }
        //type === complete
        this.stepperService[type].next(this.form.valid);
      }
    )
  }  
  
  setFormState(): void{
    this.form = this.fb.group({
      roleId: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],      
    });
    
    if(this.value){
      this.form.patchValue(this.value);
    }
  }

  ngOnDestroy(): void {
    this.destroy.next;
    this.destroy.complete;
}

}
