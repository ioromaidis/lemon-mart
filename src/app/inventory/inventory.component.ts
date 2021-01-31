import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-inventory',
  template: `
    <mat-toolbar color="accent" fxLayoutGap="8px">
      <a mat-button routerLink="home" routerLinkActive="active-link"
        >Inventory Dashboard</a
      >
      <a mat-button routerLink="stock-entry" routerLinkActive="active-link"
        >Stock Entry</a
      >
      <a mat-button routerLink="products" routerLinkActive="active-link">Products</a>
      <a mat-button routerLink="categories" routerLinkActive="active-link">Categories</a>
    </mat-toolbar>
    <router-outlet> </router-outlet>
  `,
  styles: [],
})
export class InventoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
