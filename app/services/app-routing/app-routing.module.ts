import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from '../../app.component';
import {ProfileComponent } from '../../profile/profile.component';
import { SearchformComponent } from '../../search/search.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: '', component: SearchformComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})

export class AppRoutingModule { }
export const routingComponents = [ProfileComponent,SearchformComponent];
