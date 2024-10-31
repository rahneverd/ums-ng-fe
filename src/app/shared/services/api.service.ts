import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiActions, ApiPayload, ApiResponse } from '../models/api.model';
import { catchError, Observable, ObservableInput, tap, throwError } from 'rxjs';
import { API_BASE_URL } from '../utils/ApiEndpoints';
import { Pagination } from '../models/form.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements ApiActions {
  // private alertService: AlertService
  constructor(private myHttpClient: HttpClient) {}

  errorHandler = (error: HttpErrorResponse): ObservableInput<any> => {
    let errorMessage = '';
    if (!navigator.onLine) {
      errorMessage = 'Connection Error';
      return throwError(errorMessage);
    } else {
      // this.alertService.showCustomErrorAlert(
      //   error?.error?.message || 'An unexpected error occurred!'
      // );
      return throwError('Error : Server Error');
    }
  };

  post(url: string, data: any, showToast?: boolean) {
    return this.myHttpClient.post<any>(url, data).pipe(
      tap((res: ApiResponse) => {
        if (showToast) {
          // this.alertService.checkToast(res, showToast);
          // console.log('oas url here: ', url);
        }
      }),
      catchError(this.errorHandler)
    );
  }

  public call(
    obj: Object,
    pagination: Pagination,
    actionUrl: string,
    showToast: boolean
  ) {
    return this.post(
      `${API_BASE_URL}${actionUrl}`,
      ApiPayload.payload(obj, pagination),
      showToast
    );
  }
}
