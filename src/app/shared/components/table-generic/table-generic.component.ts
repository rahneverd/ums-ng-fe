import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableConfig } from '../../models/table.model';
import { ActionConfig } from '../../models/common.model';
import { FORM_CONSTANTS } from '../../utils/Constants';

@Component({
  selector: 'app-table-generic',
  templateUrl: './table-generic.component.html',
  styleUrls: ['./table-generic.component.scss'],
})
export class TableGenericComponent {
  @Input() tableConfig = new TableConfig();
  @Output() onAction: EventEmitter<any> = new EventEmitter();

  constructor() {}

  getMultiplePathsData(data: any, multiplePaths: any) {
    let finalResult = '';
    multiplePaths.forEach((field: string) => {
      finalResult = eval(`data.${field}`)
        ? finalResult + eval(`data.${field}`) + ' '
        : finalResult;
    });
    return finalResult;
  }

  getNestedPathData(data: any, nestedPath: any) {
    return eval(`data.${nestedPath}`);
  }

  checkDisabled(action: ActionConfig) {
    if (action.validations?.length) {
      let value = false;
      // for (let validation of action.validations) {
      //   if (!this.form.get(validation)?.valid) {
      //     value = true;
      //   }
      // }
      return value;
    } else {
      return false;
    }
  }

  onClick(action: ActionConfig, data?: any) {
    console.log('hello');
    this.onAction.emit({ ...action, data: data });
  }

  // getters
  get formConstants() {
    return FORM_CONSTANTS;
  }
}
