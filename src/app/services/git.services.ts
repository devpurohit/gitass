import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';




@Injectable()
export class GithubService {
    private userName: string;

    constructor(private _http: Http) {
        // console.log('Github Service Ready.');
        this.userName = '';
    }

    getUser() {
        if (this.userName) {
            return this._http.get('https://api.github.com/search/users?q=' + this.userName)
                .pipe(
                  map(res => res.json()),
                  catchError(this.handleError));
        }
        // In this way, errors can be captured via the return value
        // .map(res => {
        //     console.log(res);
        //     if (res.status != 200) {
        //         throw new Error('This request has failed ' + res.status);
        //     }
        //     else {
        //         return res.json();
        //     }
        // })
    }

    getRepos() {
        if (this.userName) {
            return this._http.get('https://api.github.com/search/users?q=' + this.userName + '/repos')
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
