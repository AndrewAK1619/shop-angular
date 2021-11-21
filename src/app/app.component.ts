import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoginFromLocaleStorageAction } from './components/public/auth/state/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new LoginFromLocaleStorageAction())
  }
}
