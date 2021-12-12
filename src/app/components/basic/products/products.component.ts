import { GetPageProductAction } from './../state/product.actions';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageProductDto } from 'src/app/api/models';
import { PageEvent } from '@angular/material/paginator';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() displayedColumns: string[];

  @Select(state => state.product.pageProduct) pageProduct$: Observable<PageProductDto>;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetPageProductAction(0, 10))
  }

  changePage(page: PageEvent): void {
    this.store.dispatch(new GetPageProductAction(page.pageIndex, page.pageSize))
  }
}
