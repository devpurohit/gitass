import { Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from "../data.service";
import { GithubService } from '../services/git.services';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    userprofile: any[] = [];


    constructor(private _searched: GithubService, private data: DataService) {
      this.getUser();


      }

      ngOnInit() {
        this.data.currentMessage.subscribe(message => this.getUser());

      }

    getUser() {
      this._searched.getProfile().subscribe(user => {
        this.userprofile = user;
      });
    }


}
