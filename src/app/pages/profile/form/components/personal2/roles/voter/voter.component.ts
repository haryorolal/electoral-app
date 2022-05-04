import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors } from 'src/app/shared';
import { Dictionaries } from 'src/app/store/dictionaries';

export interface voterA{
  phone: string
}
@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {

  @Input() parent: FormGroup;
  @Input() name: string;
  @Input() value: voterA;
  @Input() dictionaries: Dictionaries
  //superAdmin 
  regexErrors = regexErrors

  form: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { 
    
    this.setFormState();   
    
  }

  ngOnDestroy(): void {
      this.parent.removeControl(this.name)
  }

  setFormState(): void{
    this.form = this.fb.group({
      phone: [null, {
        updateOn: 'change', validators: [
          Validators.required,
          Validators.pattern(regex.numbers)
        ]
      }]
    });

    if(this.value){
      this.form.patchValue(this.value);
    }

    this.parent.addControl(this.name, this.form)
  }

}
