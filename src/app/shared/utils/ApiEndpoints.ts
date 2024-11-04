import { environment } from 'src/environments/environment';

export const API_BASE_URL: string = environment.baseUrl;

export enum API_ENDPOINTS {
  // users routes
  LOGIN = 'user/login',
  USER_FIND_ALL = 'user/findAll',
  USER_CREATE = 'user/createUser',
  USER_UPDATE = '',

  // applications routes
  APPLICATION_CREATE = 'application/create',
  APPLICATION_FIND_ALL = 'application/findAll',
  APPLICATION_UPDATE = 'application/update',
  APPLICATION_DELETE = 'application/delete',
}
