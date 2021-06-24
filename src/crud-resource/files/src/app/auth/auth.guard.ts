import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../shared/service/auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      console.log('auth gaurd called')
      // return true;
      return this.authService.isAuthenticated().pipe(map((response: { authenticated: boolean}) => {
        if (response.authenticated) {
            return true;
        }
        this.router.navigate(['/accounts']);
        return false;
    }), catchError((error) => {
        this.router.navigate(['/accounts']);
        return of(false);
    }));
  }
}

