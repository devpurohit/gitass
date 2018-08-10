import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';


import { GithubUser } from '../models/gitusers';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    @Input() githubUser: GithubUser;

    constructor() {

    }

    ngOnInit() { }

}
