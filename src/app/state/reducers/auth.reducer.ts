import { AuthActionTypes, AuthActions } from '../actions/auth.actions';

export interface State {
  isLoggedIn: boolean;
}

export const initialState: State = {
  isLoggedIn: false
};

export function reducer(state: State = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        isLoggedIn: true
      };

    case AuthActionTypes.LogoutConfirmed:
      return initialState;

    default:
      return state;
  }
}

export const getIsLoggedIn = (state: State) => state.isLoggedIn;
