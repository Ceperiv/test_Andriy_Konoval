import {Injectable} from '@angular/core';

import {IParams} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ParamsService {
  params: IParams = {limit: '10', breed: '', sorting: ''};

  setParams(params: IParams): void {
    this.params = {limit: '10', breed: '', sorting: ''};
    this.params = params;
  };

  getParams(): IParams {
    return this.params;
  };
}
