import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ACTIONS, FORM_CONSTANTS } from 'src/app/shared/utils/Constants';

const moduleName = 'Applications';

// FORM CONFIGURATION

export enum fieldLabels {
  title = 'Title',
  description = 'Description',
  lovStatusId = 'Status',
}

export enum controlNames {
  title = 'title',
  description = 'description',
  lovStatusId = 'lovStatusId',
}

export const APPLICATION_FORM_CONFIG = {
  formTitle: moduleName,
  formClass: 'card p-fluid',
  controlsClass: 'row',
  formControls: [
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
      fieldLabel: fieldLabels.title,
      controlName: controlNames.title,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-12 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      // fieldClass: 'input-text',
      // id: string
    },
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
      fieldLabel: fieldLabels.description,
      controlName: controlNames.description,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-12 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      // fieldClass: 'input-text',
      // id: string
    },
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
      fieldLabel: fieldLabels.lovStatusId,
      controlName: controlNames.lovStatusId,
      // nestedPath?: string;
      // onChange?: boolean;
      showIcon: true,
      outerClass: 'col-md-12 form-field-container',
      labelClass: 'form-field-label',
      spanClass: 'p-input-icon-right',
      iconClass: 'pi pi-user',
      // fieldClass: 'input-text',
      // id: string
    },
  ],
  formActions: [
    {
      actionName: ACTIONS.ADD,
      actionTitle: ACTIONS.ADD_TITLE,
      buttonSelector: FORM_CONSTANTS.SELECTOR_BUTTON,
      // actionUrl?: string;
      // showToast?: true,
    },
  ],
  formData: {},

  pagination: {},
};
