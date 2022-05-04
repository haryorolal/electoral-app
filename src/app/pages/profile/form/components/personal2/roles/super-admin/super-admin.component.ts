import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dictionaries } from 'src/app/store/dictionaries';

export interface superA{
  code: string
}

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent implements OnInit, OnDestroy {

  @Input() parent: FormGroup;
  @Input() name: string;
  @Input() value: superA;
  @Input() dictionaries: Dictionaries
  superAdmin 

  form: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.superAdmin = this.dictionaries.code.controlItemsInterface[1].value    
    this.setFormState();   
    
  }

  ngOnDestroy(): void {
      this.parent.removeControl(this.name)
  }

  setFormState(): void{
    this.form = this.fb.group({
      code: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      codeRepeat: [this.superAdmin]
    }, {validators: this.checkCodeValidation }
    );

    if(this.value){
      this.form.patchValue(this.value);
    }

    this.parent.addControl(this.name, this.form)
  }

  private checkCodeValidation(group: FormGroup):{[key: string]: boolean}{
    const code = group.get('code');
    const codeR = group.get('codeRepeat')
    //Enter code = superAdmin(i9#@$%=xmd[EHAY]!>?)
    return code.value !== codeR.value
    ? {repeat: true}
    : null
  }




}
