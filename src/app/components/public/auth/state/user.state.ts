import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
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
  registerUser({ getState, setState }: StateContext<UserStateModel>, { userDto }: RegisterUserAction) {
    return this.userControllerService.saveUserUsingPOST(userDto);
  }
}
