import {ICats} from "../../../interfaces";

export class FetchCats {
  static readonly type = '[Cat] Get Cats';
}

export class FetchCatsSuccess {
  static readonly type = '[Cat] Fetch Cats Success';

  constructor(public payload: ICats[]) {
  };
}

export class FetchCatsError {
  static readonly type = '[Cat] Fetch Cats Error';

  constructor(public error: any) {
  };
}
