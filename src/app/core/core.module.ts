import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";

import {CatState} from "./store/state/cat.state";
import {environment} from "../../environmets/environment.dev";
import {BreedState} from "./store/state/breeds.state";


@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forRoot([CatState, BreedState]),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
  ]
})

export class CoreModule {
}
