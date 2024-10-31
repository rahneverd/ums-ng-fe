import { Injectable } from '@angular/core';
import { ApiActions } from '../models/apiActions.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements ApiActions {
  constructor() {}
}
