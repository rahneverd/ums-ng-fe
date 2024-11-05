import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ACTIONS, FORM_CONSTANTS } from 'src/app/shared/utils/Constants';

const moduleName = 'Applications';

// TABLE CONFIGURATION
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

  firstName = 'firstName',
  middleName = 'middleName',
  lastName = 'lastName',
}

export const APPLICATIONS_TABLE_CONFIG = {
  tableTitle: moduleName,
  tableData: [],
  // endPoint?: string,
  tableColumns: [
    {
      field: fieldNames.name,
      colHeader: colHeaders.name,
      multiplePaths: [
        fieldNames.firstName,
        fieldNames.middleName,
        fieldNames.lastName,
      ],
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.username,
      colHeader: colHeaders.username,
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.package,
      colHeader: colHeaders.package,
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.role,
      colHeader: colHeaders.role,
      nestedPath: 'lovUserTypeId.title',
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
    {
      field: fieldNames.status,
      colHeader: colHeaders.status,
      nestedPath: 'lovStatusId.title',
      eventAction: false,
      showBadge: false,
      class: 'string',
      // pipe?: string;
    },
  ],
  tableActions: [
    // {
    //   actionName: ACTIONS.ADD,
    //   actionTitle: 'Add Application',
    //   actionUrl: API_ENDPOINTS.USER_CREATE,
    //   // visibleInActionMenu: true,
    //   showToast: true,
    // },
    {
      actionName: ACTIONS.ADD,
      actionTitle: 'Add Application',
      buttonSelector: FORM_CONSTANTS.SELECTOR_BUTTON,
      actionUrl: API_ENDPOINTS.APPLICATION_CREATE,
      showToast: true,
    },
  ],
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
