import { Observable } from 'rxjs';
import { Pagination } from './form.model';

export interface ApiResponse {
  documentation: string;
  data: any;
  statusCode: number;
  message: string;
}

export interface ApiActions {
  post(
    url: string,
    data: any,
    showToast?: boolean
  ): Observable<ApiResponse> | Promise<ApiResponse> | any;
}

export class ApiPayload {
  public static payload(obj: any, pagination?: Pagination) {
    let payload = {
      // 'data': [obj, (pagination?.pageNo !== 0)? pagination :  {}]
      data: [obj],
      pagination: pagination,
    };

    return payload;
  }
}
