import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { GithubService } from '../services/git.services';
import { map } from 'rxjs/operators';


import { GithubUser } from '../models/gitusers';

@Component({
    selector: 'searchform',
    templateUrl: 'search.component.html'
})


export class SearchformComponent implements OnInit {
    @Input() githubUser: GithubUser;
    @Output() userUpdated: EventEmitter<GithubUser> = new EventEmitter<GithubUser>();

    constructor(private _githubService: GithubService) {
    }

    ngOnInit() {

        if (this.githubUser) {
            this.githubUser.user = false;
            this.getUserInformation();
        }

    }

    searchUser() {
        if (this.githubUser.userName && this.githubUser.userName.length > 0) {
            this._githubService.updateUser(this.githubUser.userName);
            this.getUserInformation();
        } else {
            this.githubUser.user = false;
        }
    }

    getUserInformation() {
        if (this.githubUser.userName && this.githubUser.userName.length > 0) {

            this._githubService.getUser().subscribe(user => {
                this.githubUser.user = user;
                this.userUpdated.emit(this.githubUser);
            },
                (err) => {
                    console.log('err:' + err);
                    this.githubUser.user = false;
                },
                () => console.log('Done')
            );



            this._githubService.getRepos().subscribe(repos => {
                // console.log(repos);
                this.githubUser.repos = repos;
                this.userUpdated.emit(this.githubUser);
            },
                (err) => {
                    console.log('err:' + err);
                    this.githubUser.user = false;
                },
                () => console.log('Done')
            );

        }
    }
}
