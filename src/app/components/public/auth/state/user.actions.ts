import { UserDto } from "src/app/api/models";

export class RegisterUserAction {
  static readonly type = '[User] RegisterUserAction';
  constructor(public userDto: UserDto) { }
}
