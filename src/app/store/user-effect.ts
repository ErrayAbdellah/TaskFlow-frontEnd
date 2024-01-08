import {Injectable} from "@angular/core";
import {map, mergeMap, of} from "rxjs";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../service/user-service.service';
import * as UserActions from './user-action';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUsers),
    mergeMap(() => this.userService.getUsers()
      .pipe(
        map(users => UserActions.loadUsersSuccess({ users })),
        catchError(error => of(UserActions.loadUsersFailure({ error })))
      ))
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
