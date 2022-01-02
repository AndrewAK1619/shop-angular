import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.scss']
})
export class ProductListAdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'serialNumber', 'quantity', 'price',
    'createdBy', 'lastModifiedBy', 'createdDate', 'lastModifiedDate'];

  constructor() { }

  ngOnInit(): void {
  }

}
