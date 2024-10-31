// import { API_ENDPOINTS } from 'src/app/vhs/core/api-endpoints/apiEndpoints';
// import { Actions } from 'src/app/vhs/shared/enums/common';

import { ACTIONS, FORM_CONSTANTS } from 'src/app/shared/utils/Constants';

const moduleName = 'Login';

export enum fieldLabels {
  email = 'Username/Email',
  password = 'Password',
}

export enum controlNames {
  email = 'email',
  password = 'password',
}

export const LOGIN_FORM_CONFIG = {
  formTitle: moduleName,
  formControls: [
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_TEXT_BOX_ID,
      fieldLabel: fieldLabels.email,
      controlName: controlNames.email,
      // nestedPath?: string;
      // onChange?: boolean;
      // class?: string;
    },
    {
      fieldId: FORM_CONSTANTS.FIELD_TEXT_ID,
      controlId: FORM_CONSTANTS.CTRL_PASSWORD_ID,
      fieldLabel: fieldLabels.password,
      controlName: controlNames.password,
      // nestedPath?: string;
      // onChange?: boolean;
      // class?: string;
    },
  ],
  formActions: [
    {
      actionName: ACTIONS.LOGIN,
      actionTitle: ACTIONS.LOGIN_TITLE,
      buttonSelector: FORM_CONSTANTS.SELECTOR_BUTTON,
      // actionUrl?: string;
      // showToast?: boolean;
    },
  ],
  formData: {},

  pagination: {},
};
