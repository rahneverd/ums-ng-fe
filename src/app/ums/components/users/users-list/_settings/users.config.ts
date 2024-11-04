// import { API_ENDPOINTS } from 'src/app/vhs/core/api-endpoints/apiEndpoints';
// import { Actions } from 'src/app/vhs/shared/enums/common';

import { Pagination } from 'src/app/shared/models/table.model';
import { ACTIONS, FORM_CONSTANTS } from 'src/app/shared/utils/Constants';

const moduleName = 'Users';

export enum colHeaders {
  name = 'Name',
  username = 'Username',
  role = 'Role',
  package = 'Package',
  status = 'Status',
}

export enum fieldNames {
  name = 'name',
  username = 'username',
  role = 'lovUserTypeId',
  package = 'packageId',
  status = 'lovStatusId',
}

export const USERS_TABLE_CONFIG = {
  tableTitle: moduleName,
  tableData: [],
  // endPoint?: string,
  tableColumns: [
    {
      field: fieldNames.name,
      colHeader: colHeaders.name,
      nestedPath: 'string',
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.username,
      colHeader: colHeaders.username,
      nestedPath: 'string',
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.package,
      colHeader: colHeaders.package,
      nestedPath: 'string',
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.role,
      colHeader: colHeaders.role,
      nestedPath: 'string',
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.status,
      colHeader: colHeaders.status,
      nestedPath: 'string',
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
  ],
  // tableActions?: ActionConfig[],
  // rowActions?: ActionConfig[],
  pagination: {},

  // formTitle: moduleName,
  // formClass: 'card p-fluid',
  // controlsClass: 'row',
  // formControls: [
  //   {
  //     fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
  //     controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
  //     fieldLabel: fieldLabels.email,
  //     controlName: controlNames.email,
  //     // nestedPath?: string;
  //     // onChange?: boolean;
  //     showIcon: true,
  //     outerClass: 'col-md-12 form-field-container',
  //     labelClass: 'form-field-label',
  //     spanClass: 'p-input-icon-right',
  //     iconClass: 'pi pi-user',
  //     // fieldClass: 'input-text',
  //     // id: string
  //   },
  //   {
  //     fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
  //     controlId: FORM_CONSTANTS.CTRL_PASSWORD_ID,
  //     fieldLabel: fieldLabels.password,
  //     controlName: controlNames.password,
  //     // nestedPath?: string;
  //     // onChange?: boolean;
  //     showIcon: true,
  //     outerClass: 'col-md-12 form-field-container',
  //     labelClass: 'form-field-label',
  //     spanClass: 'p-input-icon-right',
  //     // iconClass: 'pi pi-key',
  //     // fieldClass: 'input-text ',
  //     // id: string
  //   },
  // ],
  // formActions: [
  //   {
  //     actionName: ACTIONS.LOGIN,
  //     actionTitle: ACTIONS.LOGIN_TITLE,
  //     buttonSelector: FORM_CONSTANTS.SELECTOR_BUTTON,
  //     // actionUrl?: string;
  //     // showToast?: true,
  //   },
  //   {
  //     actionName: ACTIONS.REGISTER,
  //     actionTitle: ACTIONS.REGISTER_TITLE,
  //     buttonSelector: FORM_CONSTANTS.SELECTOR_BUTTON,
  //     // actionUrl?: string;
  //     // showToast?: boolean;
  //   },
  // ],
  // formData: {},

  // pagination: {},
};
