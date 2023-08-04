import {IErr} from "./err.interface";
import {IBreeds} from "./breeds.interface";

export interface IBreedsState {
  cats: IBreeds[],
  isLoading: boolean,
  error: IErr,
}
