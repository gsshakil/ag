import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LandingPageComponent } from './landing-page/landing-page.component';
import { PeopleComponent } from './people/people.component';
import { CompaniesComponent } from './companies/companies.component';
import { ArchivesComponent } from './archives/archives.component';
import { FundinngComponent } from './fundinng/fundinng.component';
import { MentorsComponent } from './mentors/mentors.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AppsComponent } from './apps/apps.component';
import { FeedComponent } from './feed/feed.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: LandingPageComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'companies', component: CompaniesComponent},
  { path: 'archive', component: ArchivesComponent},
  { path: 'funding', component: FundinngComponent},
  { path: 'mentors', component: MentorsComponent},
  { path: 'jobs', component: JobBoardComponent},
  { path: 'marketplace', component: MarketplaceComponent},
  { path: 'apps', component: AppsComponent},
  { path: 'feed', component: FeedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
