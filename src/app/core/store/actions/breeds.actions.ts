import {IBreeds} from "../../../interfaces";

export class FetchBreeds {
  static readonly type = '[Breed] Get Breeds';
}

export class FetchBreedsSuccess {
  static readonly type = '[Breed] Fetch Breeds Success';

  constructor(public payload: IBreeds[]) {
  };
}

export class FetchBreedsError {
  static readonly type = '[Breed] Fetch Breeds Error';

  constructor(public error: any) {
  };
}
