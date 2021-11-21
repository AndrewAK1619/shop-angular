import { UserDto } from "src/app/api/models";

export class RegisterUserAction {
  static readonly type = '[User] RegisterUserAction';
  constructor(public userDto: UserDto) { }
}

export class LoginUserAction {
  static readonly type = '[User] LoginUserActiion';
  constructor(public email: string, public password: string) { }
}

export class LogoutAction {
  static readonly type = '[User] LogoutUserAction';
  constructor() { }
}

export class LoginFromLocaleStorageAction {
  static readonly type = '[User] LoginFromLocaleStorageAction';
  constructor() {}
}
