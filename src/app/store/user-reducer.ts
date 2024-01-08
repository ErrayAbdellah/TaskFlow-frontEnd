import {createReducer, on} from "@ngrx/store";
import {UserDTO} from "../model/user";
// @ts-ignore
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  users: UserDTO[];

}

export const initialState: State = {
  users: [],

};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, action) => ({ ...state, users: action.users })),

);
