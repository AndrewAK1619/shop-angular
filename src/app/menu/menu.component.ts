import { LogoutAction } from './../components/public/auth/state/user.actions';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @Select(state => state.user.token) // w zależności od zmiennej token w modelu state będzie wartość zmiennej nadpisywana
  token$: Observable<string>

  constructor(private breakpointObserver: BreakpointObserver,
    private readonly store: Store) { }

  logout() {
    this.store.dispatch(new LogoutAction())
  }
}
