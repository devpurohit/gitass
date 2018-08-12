import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
const API_URL1 = environment.apiUrl1;
const API_URL2 = environment.apiUrl2;




@Injectable()
export class GithubService {
    private userName : string = "devpurohit";
    private client_id = '3198278eb6fb7788fa1e';
    private client_secret = 'd6b3cf6265f7997f110ec1450246e7157d055a8f';

    constructor(private _http: Http) {
    }

    getUser() {
        if (this.userName) {

            return this._http.get(API_URL1 + this.userName + '&client_id=' + this.client_id + '&client_secret=' + this.client_secret)
                .pipe(
                  map(res => res.json()));
        }
    }

    getProfile() {

        if (this.userName) {
            return this._http.get(API_URL2 + this.userName + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
                .pipe(
                  map(res => res.json()));
        }
    }


    updateUser(username: string) {
        this.userName = username;


    }


    getRepos() {

        if (this.userName) {
            return this._http.get(API_URL2 + this.userName + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
                .pipe(
                  map(res => res.json()));
        }
    }

}
