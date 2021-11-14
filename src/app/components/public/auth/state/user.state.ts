import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { UserControllerService } from 'src/app/api/services';
import { RegisterUserAction } from './user.actions';

export class UserStateModel {
  public items: string[];
}

const defaults = {
  items: []
};

@State<UserStateModel>({
  name: 'user',
  defaults
})
@Injectable()
export class UserState {

  constructor(public readonly userControllerService: UserControllerService) {
  }

  @Action(RegisterUserAction)
  registerUser({ dispatch }: StateContext<UserStateModel>, { userDto }: RegisterUserAction) {
    return this.userControllerService.saveUserUsingPOST(userDto).pipe(
      tap(response => dispatch(new Navigate(['/auth/login'])))
    )
  }
}
