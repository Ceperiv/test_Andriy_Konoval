import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {tap} from 'rxjs/operators';

import {BreedService} from '../../services';
import {IBreeds} from '../../../interfaces';
import {FetchBreeds, FetchBreedsError, FetchBreedsSuccess} from "../actions/breeds.actions";

export interface BreedStateModel {
  breeds: IBreeds[];
  isLoading: boolean;
  error: any;
}

@State<BreedStateModel>({
  name: 'breeds',
  defaults: {
    breeds: [],
    isLoading: false,
    error: null,
  },
})
@Injectable()
export class BreedState {
  constructor(private breedService: BreedService) {}

  @Action(FetchBreeds)
  fetchBreeds(ctx: StateContext<BreedStateModel>) {
    ctx.patchState({
      isLoading: true,
      error: null,
    });

    return this.breedService.getBreeds().pipe(
      tap(
        (breeds: IBreeds[]) => {
          ctx.dispatch(new FetchBreedsSuccess(breeds));
        },
        (error: any) => {
          ctx.dispatch(new FetchBreedsError(error));
        }
      )
    );
  }

  @Action(FetchBreedsSuccess)
  fetchBreedsSuccess(ctx: StateContext<BreedStateModel>, action: FetchBreedsSuccess) {
    const breeds = action.payload;

    ctx.patchState({
      breeds,
      isLoading: false,
      error: null,
    });
  }

  @Action(FetchBreedsError)
  fetchBreedsError(ctx: StateContext<BreedStateModel>, action: FetchBreedsError) {
    const error = action.error;

    ctx.patchState({
      breeds: [],
      isLoading: false,
      error,
    });
  }

  @Selector()
  static getBreeds(state: BreedStateModel) {
    return state.breeds;
  }

  @Selector()
  static isLoading(state: BreedStateModel) {
    return state.isLoading;
  }

  @Selector()
  static getError(state: BreedStateModel) {
    return state.error;
  }
}
