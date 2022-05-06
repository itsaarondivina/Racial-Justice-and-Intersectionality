import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [{path:'about', component:AboutComponent},
                        {path:'home', component:HomeComponent},
                        {path:'contact', component:ContactComponent},
                        {path:'team', component:TeamComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
