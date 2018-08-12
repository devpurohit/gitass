import { Component, OnInit  } from '@angular/core';
import { GithubService } from '../services/git.services';
import { map } from 'rxjs/operators';
import {Router} from "@angular/router";
import { DataService } from "../data.service";



//import { user } from '../models/gitusers';

@Component({
    selector: 'searchform',
    templateUrl: 'search.component.html'
    })


export class SearchformComponent implements OnInit {
    users :  any;
    uarr: any[] = [];
    username: string;


  //  @Output() userUpdated: EventEmitter<user> = new EventEmitter<user>();

    constructor(private _githubService: GithubService,private router: Router,private data: DataService) {

      }

      ngOnInit() {
        this.data.currentMessage.subscribe(message => this.username = message)

      }
    searchUser() {
      this._githubService.updateUser(this.username);

        this._githubService.getUser().subscribe(user => {
        this.users = user.items;
        for (var i in this.users) {
          this.uarr[i] =this.users[i]; }
        });

    }

    onClick(login) {
    this._githubService.updateUser(login);
    this.data.changeMessage(login);
    this.router.navigate(['/profile']);
    }
}
