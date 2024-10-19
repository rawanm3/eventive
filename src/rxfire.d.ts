declare module 'rxfire/auth' {
  import { Observable } from 'rxjs';
  import { User } from 'firebase/auth';

  export function authState(auth: any): Observable<User | null>;
}
