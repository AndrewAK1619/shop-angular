export class GetPageProductAction {
  static readonly type = '[Product] GetPageProductAction';
  constructor(public page: number, public size: number) { }
}
