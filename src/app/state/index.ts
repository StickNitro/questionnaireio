import * as fromAuth from '@qnx/auth/state/reducers/auth.reducer';

import { ActionReducer, ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export interface State {
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): State => {
    console.log('[NGRX] state: ', state);
    console.log('[NGRX] action: ', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const selectAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getIsLoggedIn = createSelector(selectAuthState, fromAuth.getIsLoggedIn);
