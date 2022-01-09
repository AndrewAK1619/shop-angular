import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { UserControllerService } from 'src/app/api/services';
import { environment } from 'src/environments/environment';
import { RegisterUserAction, LoginUserAction, LogoutAction, LoginFromLocaleStorageAction, GetCurrentUserAction } from './user.actions';
import { UserDto } from 'src/app/api/models';

export class UserStateModel {
  public token: string; // pathState aktualizuje zmienną UserStateModel
  public currentUser: UserDto;  // pathState aktualizuje zmienną UserStateModel
}

const defaults = {
  token: '',
  currentUser: {}
};

@State<UserStateModel>({
  name: 'user', // nazwa state - UserState
  defaults
})
@Injectable()
export class UserState {

  constructor(public readonly userControllerService: UserControllerService,
    public readonly httpClient: HttpClient) {
  }

  @Selector() // dzięki niej możemy pobierać wartości z modelu state
  static currentUser(userStateModel: UserStateModel) {
    return userStateModel.currentUser;
  }

  @Action(RegisterUserAction)
  registerUser({ dispatch }: StateContext<UserStateModel>, { userDto }: RegisterUserAction) {
    return this.userControllerService.saveUserUsingPOST(userDto).pipe(
      tap(response => dispatch(new Navigate(['/auth/login'])))
    )
  }

  @Action(LoginUserAction)
  loginUser({ dispatch, patchState }: StateContext<UserStateModel>, { email, password }: LoginUserAction) {
    return this.httpClient.post<{ token: string }>(`${environment.url}/api/login`, { email, password }).pipe(
      tap(response => {
        patchState({ token: response.token });
        localStorage.setItem('token', response.token);
        dispatch(new GetCurrentUserAction())
      })
    )
  }

  @Action(LogoutAction)
  logoutUser({ dispatch, patchState }: StateContext<UserStateModel>) {
    patchState({ token: '' })
    dispatch(new Navigate(['/auth/login']));
    localStorage.removeItem('token')
  }

  @Action(LoginFromLocaleStorageAction)
  loginFromLocaleStorage({ dispatch, patchState }: StateContext<UserStateModel>) {
    const token = localStorage.getItem('token');
    if (token) {
      patchState({ token }) // jeżeli nazwa zmiennej pokrywa się z nazwą przekazywnej zmiennej to nie potrzeba przypisywać
      dispatch(new GetCurrentUserAction())
    }
  }

  @Action(GetCurrentUserAction)
  getCurrentUser({ patchState }: StateContext<UserStateModel>) {
    return this.userControllerService.getCurrentUserUsingGET().pipe(
      tap(response =>
        patchState({ currentUser: response })
      )
    );
  }
}
