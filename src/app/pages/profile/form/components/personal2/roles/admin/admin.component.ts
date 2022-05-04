import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dictionaries } from 'src/app/store/dictionaries';

export interface AdminA{
  code: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  @Input() parent: FormGroup;
  @Input() name: string;
  @Input() value: AdminA;
  @Input() dictionaries: Dictionaries
  Admin;
  message;

  form: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.Admin = this.dictionaries.code.controlItemsInterface[0].value
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
      codeRepeat: [this.Admin]
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
    //Enter code = admin(*&#JAHDis902#?.@!) to validate
    return code.value !== codeR.value ? {repeat: true } : null;
  }

  


}
