import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Components
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchformComponent } from './search/search.component';

//Services
import { GithubService } from './services/git.services';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
