import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
const API_URL = environment.apiUrl;




@Injectable()
export class GithubService {
    private userName = "devpurohit";
    private client_id = '3198278eb6fb7788fa1e';
    private client_secret = 'd6b3cf6265f7997f110ec1450246e7157d055a8f';

    constructor(private _http: Http) {
        console.log('Github Service Ready.');
    }

    getUser() {
        if (this.userName) {
            return this._http.get(API_URL + this.userName)
                .pipe(
                  map(res => res.json()),
                  catchError(this.handleError));
        }
    }

    getRepos() {
        if (this.userName) {
            return this._http.get(API_URL + this.userName + '/repos')
                 .pipe(
                  map(res => res.json()),
                  catchError(this.handleError));
        }

    }

    updateUser(userName: string) {
        this.userName = userName;
    }

    private handleError(error: any) {

        if (error.status === 401) {
            return Observable.throw(error.status);
        } else {
            return Observable.throw(error.status || 'Server error');
        }
    }
}
