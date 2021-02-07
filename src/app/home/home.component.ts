import { Component, OnInit } from '@angular/core'
import { filter, tap } from 'rxjs/operators'

import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayLogin = true
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
