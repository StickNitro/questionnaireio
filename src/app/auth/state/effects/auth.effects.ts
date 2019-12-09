import * as authActions from '../actions/auth.actions';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions) { }

  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<authActions.Login>(authActions.AuthActionTypes.Login),
    tap(() => {
      return this.authService.login();
    })
  );

}
