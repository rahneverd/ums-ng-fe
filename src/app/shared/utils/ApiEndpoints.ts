import { environment } from 'src/environments/environment';

export const API_BASE_URL: string = environment.baseUrl;

export enum API_ENDPOINTS {
  LOGIN = 'user/login',
}
