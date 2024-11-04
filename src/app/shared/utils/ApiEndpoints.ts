import { environment } from 'src/environments/environment';

export const API_BASE_URL: string = environment.baseUrl;

export enum API_ENDPOINTS {
  // users routes
  LOGIN = 'user/login',
  FIND_ALL = 'user/findAll',
  CREATE_USER = 'user/createUser',
}
