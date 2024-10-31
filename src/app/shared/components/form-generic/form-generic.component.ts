import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FORM_CONSTANTS } from '../../utils/Constants';
import { ActionConfig } from '../../models/form.model';

@Component({
  selector: 'app-form-generic',
  templateUrl: './form-generic.component.html',
  styleUrls: ['./form-generic.component.scss'],
})
export class FormGenericComponent implements OnInit, OnDestroy {
  @Input() formConfig: any;
  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log('this.formConfig: ', this.formConfig);
    this.initForm();
  }

  initForm() {
    for (const control of this.formConfig?.formControls) {
      this.form.addControl(
        control.controlName,
        this.fb.control('', Validators.required)
      );
    }
  }

  onClick(action: ActionConfig) {
    console.log('onClick', action);
  }

  // getters
  get formConstants() {
    return FORM_CONSTANTS;
  }

  ngOnDestroy() {}
}
