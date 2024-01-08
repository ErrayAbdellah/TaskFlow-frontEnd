import { Component } from '@angular/core';
// @ts-ignore
import { loadUsers } from './state/user.actions'
import { selectAllUsers } from './state/user.selectors';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users$ = this.store.select(selectAllUsers);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }
}
