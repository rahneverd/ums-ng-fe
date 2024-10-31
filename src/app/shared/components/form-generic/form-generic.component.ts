import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
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
  @Output() onAction: EventEmitter<any> = new EventEmitter();
  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
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
    this.onAction.emit(action);
  }

  // getters
  get formConstants() {
    return FORM_CONSTANTS;
  }

  ngOnDestroy() {}
}
