import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { StepperService } from '../stepper/services';
import { Observable, Subject, takeUntil } from 'rxjs';
import { regex, regexErrors } from 'src/app/shared';
import { markFormGroupTouched } from 'src/app/shared';
import { Dictionaries } from 'src/app/store/dictionaries';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface PersonalformInterface {
  name: string;
  photoURL: string;
  country: string;
  about: string;
  nin: number;
}

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalComponent implements OnInit, OnDestroy {

  @Input() value: PersonalformInterface;
  @Input() dictionaries: Dictionaries;
  @Output() changed = new EventEmitter<PersonalformInterface>();

  private destroy = new Subject<any>();
  form: FormGroup;
  regexErrors = regexErrors


  constructor(private stepperService: StepperService, private fb: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.setFormState()
    //subscribe to the observable check to check the validity of the next step
    this.stepperService.check$.pipe(takeUntil(this.destroy)).subscribe(
      //type === next
      (type) => {
        if(!this.form.valid){
          markFormGroupTouched(this.form);
          this.form.updateValueAndValidity();
          this.cdr.detectChanges();
        }else{
          this.changed.emit(this.form.value);
        }
        this.stepperService[type].next(this.form.valid);
      });

      
  }

  setFormState():void{
    this.form = this.fb.group({
      photoURL: [null],
      name: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.maxLength(128),
          Validators.pattern(regex.latinAndSpaces)
        ]
      }],
      country: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      
      about: [null],

      nin: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.pattern(regex.numbers)
        ]
      }]      
    });

    if(this.value){
      this.form.patchValue(this.value);
    }
  }

  ngOnDestroy(): void {
      this.destroy.next;
      this.destroy.complete();
  }

  onPhotoChanged(url: string):void{
    if(url){
      this.form.controls.photoURL.setValue(url);
    }
  }

}
