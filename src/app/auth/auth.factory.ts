import { AngularFireAuth } from '@angular/fire/auth'
import { AuthMode } from './auth.enum'
import { FirebaseAuthService } from './auth.firebase.service'
import { InMemoryAuthService } from './auth.inmemory.service'
import { environment } from '../../environments/environment'

export function authFactory(
  afAuth: AngularFireAuth
): InMemoryAuthService | FirebaseAuthService {
  switch (environment.authMode) {
    case AuthMode.InMemory:
      return new InMemoryAuthService()
    case AuthMode.Firebase:
      return new FirebaseAuthService(afAuth)
    case AuthMode.CustomServer:
      throw new Error('Not yet implemented')
  }
}