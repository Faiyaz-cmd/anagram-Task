import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getData = new Subject<any>();

  constructor() { }

  returnData(): Observable<any> {
    return this.getData.asObservable();
  }
}
