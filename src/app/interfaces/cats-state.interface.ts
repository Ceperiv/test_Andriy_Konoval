import {ICats} from "./cats.interface";
import {IErr} from "./err.interface";

export interface ICatsState {
  cats: ICats[],
  isLoading: boolean,
  error: IErr,
}
