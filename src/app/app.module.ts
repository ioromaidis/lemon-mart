import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAnalyticsModule } from '@angular/fire/analytics'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { environment } from 'src/environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthGuard } from './auth/auth-guard.service'
import { AuthHttpInterceptor } from './auth/auth-http-interceptor'
import { authFactory } from './auth/auth.factory'
import { AuthService } from './auth/auth.service'
import { SimpleDialogComponent } from './common/simple-dialog.component'
import { UiService } from './common/ui.service'
import { HomeComponent } from './home/home.component'
import { InventoryModule } from './inventory/inventory.module'
import { LoginComponent } from './login/login.component'
import { ManagerModule } from './manager/manager.module'
import { MaterialModule } from './material.module'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { PosModule } from './pos/pos.module'
import { UserModule } from './user/user.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SimpleDialogComponent,
    NavigationMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ManagerModule,
    InventoryModule,
    PosModule,
    UserModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    { provide: AuthService, useFactory: authFactory, deps: [AngularFireAuth] },
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    UiService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
  entryComponents: [SimpleDialogComponent],
})
export class AppModule {}
