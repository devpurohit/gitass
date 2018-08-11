import { Component  } from '@angular/core';
import { GithubService } from '../services/git.services';
import { map } from 'rxjs/operators';


//import { user } from '../models/gitusers';

@Component({
    selector: 'searchform',
    templateUrl: 'search.component.html',
    providers:[GithubService]
  })


export class SearchformComponent  {
    users :  any;
    uarr: any[] = [];
    username: string;

  //  @Output() userUpdated: EventEmitter<user> = new EventEmitter<user>();

    constructor(private _githubService: GithubService) {

      }

    searchUser() {
      this._githubService.updateUser(this.username);

      console.log(this.username);
        this._githubService.getUser().subscribe(user => {
        this.users = user.items;
        for (var i in this.users) {
          this.uarr[i] =this.users[i]; }
        });
        console.log(this.uarr);

    }
/*
      ngOnInit() {

           if (this.user) {
               this.user.user = false;
               this.getUserInformation();
           }

       }

    getUserInformation() {
        if (this.user.userName && this.user.userName.length > 0) {

            this._githubService.getUser().subscribe(user => {
                this.user.user = user;
              //  this.userUpdated.emit(this.user);
            },
                (err) => {
                    console.log('err:' + err);
                    this.user.user = false;
                },
                () => console.log('Done')
            );



            this._githubService.getRepos().subscribe(repos => {
                // console.log(repos);
                this.user.repos = repos;
              //  this.userUpdated.emit(this.user);
            },
                (err) => {
                    console.log('err:' + err);
                    this.user.user = false;
                },
                () => console.log('Done')
            );

        }
    }*/
}
