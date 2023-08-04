import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../configs";
import {ICats} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private httpClient: HttpClient) {
  };

  getCatsByParams(limit?: string, breed?: string, order?: string): Observable<ICats[]> {
    return this.httpClient.get<ICats[]>(urls.cats(limit, breed, order))
  };
}
