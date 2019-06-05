import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import {DemoMaterialModule} from './material-module';
import { PeopleComponent } from './people/people.component';
import { CompaniesComponent } from './companies/companies.component';
import { ArchivesComponent } from './archives/archives.component';
import { FundinngComponent } from './fundinng/fundinng.component';
import { MentorsComponent } from './mentors/mentors.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AppsComponent } from './apps/apps.component';
import { FeedComponent } from './feed/feed.component';
import { LeftDrawerComponent } from './left-drawer/left-drawer.component';
import { RightDrawerComponent } from './right-drawer/right-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    PeopleComponent,
    CompaniesComponent,
    ArchivesComponent,
    FundinngComponent,
    MentorsComponent,
    JobBoardComponent,
    MarketplaceComponent,
    AppsComponent,
    FeedComponent,
    LeftDrawerComponent,
    RightDrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
