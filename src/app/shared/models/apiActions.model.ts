import { Observable } from 'rxjs';
import { ApiResponse } from './apiResponse.model';

export interface ApiActions {
  post(
    url: string,
    data: any,
    showToast?: boolean
  ): Observable<ApiResponse> | Promise<ApiResponse> | any;
}
