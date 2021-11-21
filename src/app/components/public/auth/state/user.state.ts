import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { UserControllerService } from 'src/app/api/services';
import { RegisterUserAction, LoginUserAction } from './user.actions';

export class UserStateModel {
  public token: string;
}

const defaults = {
  token: ''
};

@State<UserStateModel>({
  name: 'user',
  defaults
})
@Injectable()
export class UserState {

  constructor(public readonly userControllerService: UserControllerService,
    public readonly httpClient: HttpClient) {
  }

  @Action(RegisterUserAction)
  registerUser({ dispatch }: StateContext<UserStateModel>, { userDto }: RegisterUserAction) {
    return this.userControllerService.saveUserUsingPOST(userDto).pipe(
      tap(response => dispatch(new Navigate(['/auth/login'])))
    )
  }

  @Action(LoginUserAction)
  loginUser({ dispatch, patchState }: StateContext<UserStateModel>, { email, password }: LoginUserAction) {
    return this.httpClient.post<{ token: string }>('http://localhost:8080/api/login', { email, password }).pipe(
      tap(response => {
        patchState({ token: response.token })
      })
    )
  }
}
