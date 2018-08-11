import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';


import { GithubService } from '../services/git.services';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    providers:[GithubService]
})
export class ProfileComponent implements OnInit {
    userprofile :any;
    constructor(private _searched: GithubService) {
      this._searched.getProfile().subscribe(user => {
        this.userprofile = user;
        console.log(this.userprofile.login);

      });
    }

    ngOnInit() { }

}
