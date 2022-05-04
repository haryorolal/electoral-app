import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { markFormGroupTouched, regex, regexErrors } from 'src/app/shared/utils';
import * as fromRoot from '../../../../store';
import * as fromUser from '../../../../store/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  regexErrors = regexErrors;
  loading$: Observable<boolean>

  constructor(private formBuild: FormBuilder,
    private store: Store<fromRoot.State>) { }


  ngOnInit(): void {
    this.setFormState();
    
  }

  setFormState(){
    this.loading$ = this.store.pipe(select(fromUser.getLoading) );

    this.form = this.formBuild.group({
      email: [null, {
        updateOn: 'blur', 
        validators: [
          Validators.required,
          Validators.maxLength(128),
          Validators.pattern(regex.email)
        ]
      }],

      password: [null, {
        updateOn: 'change', 
        validators: [
          Validators.required,
          //Validators.minLength(6),
          //Validators.maxLength(30),
          //Validators.pattern(regex.password)
        ]
      }],     
    });
  }

  onSubmit(): void{
    if (this.form.valid){
      const value = this.form.value;
      const credentials: fromUser.EmailPasswordCredentials = {
        email: value.email,
        password: value.password
    };
    this.store.dispatch(new fromUser.SigninAction(credentials));
      

    }else{
      markFormGroupTouched(this.form);
    }
  }

}
