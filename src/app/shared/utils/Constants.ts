export enum FE_URLS {
  LOGIN = 'login',
  REGISTER = 'register',
}

export class UTS {
  public static verificationKey = 'verification';
  public static userKey = 'user';
  public static tokenKey = 'token';

  public static getUserFromLocalStorage() {
    let verificationJSON = localStorage.getItem(UTS.verificationKey);
    let verificationObject = verificationJSON
      ? JSON.parse(verificationJSON)
      : {};
    if (verificationObject?.[UTS.userKey]) {
      return verificationObject?.[UTS.userKey];
    } else {
      return null;
    }
  }

  public static getTokenFromLocalStorage() {
    let verificationJSON = localStorage.getItem(UTS.verificationKey);
    let verificationObject = verificationJSON
      ? JSON.parse(verificationJSON)
      : {};
    if (verificationObject?.[UTS.tokenKey]) {
      return verificationObject?.[UTS.tokenKey];
    } else {
      return null;
    }
  }
}

export enum FORM_CONSTANTS {
  CTRL_CHECKBOX_ID = 0,
  CTRL_DATE_PICKER_ID = 1,
  CTRL_TIME_PICKER_ID = 2,
  CTRL_DATE_TIME_PICKER_ID = 3,
  CTRL_TEXT_BOX_ID = 4,
  CTRL_RADIO_ID = 5,
  CTRL_LIST_ID = 6,
  CTRL_UPLOAD_ID = 7,
  CTRL_PASSWORD_ID = 8,

  FIELD_EMAIL_ID = 1,
  FIELD_NAME_ID = 2,
  FIELD_NUMBER_ID = 3,
  FIELD_PHONE_NUMBER_ID = 4,
  FIELD_TERMS_ID = 5,
  FIELD_DATE_ID = 6,
  FIELD_TIME_ID = 7,
  FIELD_DATE_TYPE_ID = 8,
  FIELD_TEXT_ID = 9,
  FIELD_RADIO_ID = 10,
  FIELD_LIST_ID = 11,

  SELECTOR_BUTTON = 'button',
}

export enum ACTIONS {
  LOGIN = 'login',
  REGISTER = 'register',
  ADD = 'add',
}
