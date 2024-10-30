import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        control.fieldLabel,
        this.fb.control('', Validators.required)
      );
    }
  }

  ngOnDestroy() {}
}
