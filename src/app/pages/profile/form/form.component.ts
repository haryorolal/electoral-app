import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Observable, zip} from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

import { StepperService } from './components/stepper/services';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../store';
import * as fromUser from '../../../store/user';
import * as fromDictionaries from '../../../store/dictionaries'; 
import * as fromForm from '../store/form'

import { MapperService } from './services';
import { PersonalformInterface } from './components/personal/personal.component';
import { Personal2FormInterface } from './components/personal2/personal2.component';

export interface ProfileFormInterface{
  personal: PersonalformInterface;
  personal2: Personal2FormInterface;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnDestroy {

  private isEditing: boolean;
  private destroy = new Subject<any>();
  
  //dictionaries: string
  dictionaries$: Observable<fromDictionaries.Dictionaries>;
  dictionariesIsReady$: Observable<boolean>;

  personal$: Observable<PersonalformInterface>
  personal2$: Observable<Personal2FormInterface>
  private profile$: Observable<ProfileFormInterface>

  loading$: Observable<boolean>;
  loading

  private user: fromUser.UserInterface;

  constructor(public stepperService: StepperService, 
    private store: Store<fromRoot.State>, 
    private router: Router, private activatedRoute: ActivatedRoute, private mapperService: MapperService) { }

  ngOnInit(): void {

    this.user = this.activatedRoute.snapshot.data.user;
    this.isEditing = !!this.user;

    this.profile$ = this.store.pipe(select(fromForm.getFormState));
    this.personal$ = this.store.pipe(select(fromForm.gerPersonalForm));
    this.personal2$ = this.store.pipe(select(fromForm.getPersonal2Form));

    //dictionary
    //this.dictionaries = this.store.pipe(select(fromDictionaries.getDictionaries))
    this.dictionaries$ = this.store.pipe(select(fromDictionaries.getDictionaries));
    this.dictionariesIsReady$ = this.store.pipe(select(fromDictionaries.getIsReady)); 

    this.loading$ = this.store.pipe(select(fromUser.getLoading));

    //
    if(this.user){
      const form = this.mapperService.userToForm(this.user)
      this.store.dispatch(new fromForm.Set(form));
    }

    this.stepperService.init([    
      {key: 'personal', label: 'Personal'},
      {key: 'personal2', label: 'Role'}      
    ]);

    //we subscribe to final event in form component such as cancel and complete stepper

    this.stepperService.complete$.pipe(
      switchMap(() => zip(this.profile$, this.dictionaries$)),
      takeUntil(this.destroy)).subscribe(
      ([profile, dictionaries]) => {
        this.onComplete(profile, this.user, dictionaries)
      }
    );

    this.stepperService.cancel$.pipe(takeUntil(this.destroy)).subscribe(
      () => {
        this.router.navigate(['/dashboard/profile', this.user.uid])
      }
    );
  }

  ngOnDestroy(): void {
      this.destroy.next;
      this.destroy.complete();
      this.store.dispatch(new fromForm.Clear());
  }

  get title(): string {
    return this.isEditing ? 'Edit Profile' : 'New Profile'
  }

  onChangedPersonal(data: PersonalformInterface): void{
    this.store.dispatch(new fromForm.Update({personal: data}))    
  }

  onChangedPersonal2(data: Personal2FormInterface): void{
    this.store.dispatch(new fromForm.Update({personal2: data}))
  }

  private onComplete(profile: ProfileFormInterface, user: fromUser.UserInterface, dictionaries: fromDictionaries.Dictionaries):void{
  //Editing
    if(this.isEditing) {
      const request = this.mapperService.formToUserUpdate(profile, user, dictionaries);
      //console.log(request)
      this.store.dispatch(new fromUser.Update(request));
    }else{
      //creating
      const request = this.mapperService.formToUserCreate(profile, dictionaries);
      //console.log(request)
      this.store.dispatch(new fromUser.Create(request));
    }
  }

}
