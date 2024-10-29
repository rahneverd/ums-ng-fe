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
