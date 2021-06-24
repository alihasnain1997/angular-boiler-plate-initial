import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }
    isAuthenticated() {
        // return this.http.get('/auth/isAuthenticated');
        return of({ authenticated: false });
        // Observable.of({ authenticated: true  })
    }
}