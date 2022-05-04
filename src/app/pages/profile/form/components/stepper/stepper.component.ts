import { Component, OnInit, OnDestroy } from '@angular/core';
import { StepperService } from './services';

import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit, OnDestroy {

  private destroy = new Subject<any>();

  constructor(private stepperService: StepperService) { }

  ngOnInit(): void {
    //will only switch if theres value in the next$ observable
    this.stepperService.next$.pipe(takeUntil(this.destroy)).subscribe(
      () => {
        this.stepperService.onNext()
      });
  }

  ngOnDestroy(): void {
      this.destroy.next;
      this.destroy.complete();
  }

  get steps() {
    return this.stepperService.steps;
  }

  get activeStep(){
    return this.stepperService.activeStep;
  }

  isActive(index: number): boolean {
    return index === this.activeStep.index;
  }

  isCompleted(index: number): boolean {
    return index < this.activeStep.index;
  }

  isFirst(): boolean {
    return this.activeStep.index === 0;
  }

  isLast(): boolean {
    return this.activeStep.index === this.steps.length - 1;
  }

  onNext(): void{
    //run the next check to check if you can switch to next step
    //if so, let me know with observable next
    this.stepperService.check.next('next');
  }

  onComplete(): void{
    //run the next check to check if you can switch to next step
    //if so, let me know with observable next
    this.stepperService.check.next('complete');
  }

  onPrev():void{
    this.stepperService.onPrev();
  }

  onCancel(): void{
    this.stepperService.cancel.next();
  }

}
