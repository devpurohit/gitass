import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { SearchformComponent } from './search/search.component';
import { DataService } from "./data.service";
import { GithubService } from './services/git.services';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService,
       GithubService]
})
export class AppComponent {
}
