import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
    `
      .active-link {
        font-weight: bold;
        border-bottom: 2px solid #005005;
      }
    `,
  ],
})
export class ManagerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
