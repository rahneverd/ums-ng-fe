import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableConfig } from '../../models/table.model';
import { ActionConfig } from '../../models/form.model';

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

  onClick(action: ActionConfig) {
    console.log('hello');
    this.onAction.emit({ action });
  }
}
