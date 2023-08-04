import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../configs";
import {IBreeds} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  constructor(private httpClient: HttpClient) {
  }

  getBreeds(): Observable<IBreeds[]> {
    return this.httpClient.get<IBreeds[]>(urls.breeds())
  };
}
