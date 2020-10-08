import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card'

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent} from '../app/components/home/home.component';
import { RecentPostsComponent } from '../app/components/recent-posts/recent-posts.component';
import { MostPopularComponent } from '../app/components/most-popular/most-popular.component';

import { Newsesolver} from '../app/resolver/news.resolver';
import { EditorsPicksComponent } from './components/editors-picks/editors-picks.component';
import { SubscribeNewsletterComponent } from './components/subscribe-newsletter/subscribe-newsletter.component';
import { TrendingComponent } from './components/trending/trending.component';
import { FollowingComponent } from './components/following/following.component';
import { PublicNewsComponent } from './components/public-news/public-news.component';
import { NotFoundComponent } from './components/not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecentPostsComponent,
    MostPopularComponent,
    EditorsPicksComponent,
    SubscribeNewsletterComponent,
    TrendingComponent,
    FollowingComponent,
    PublicNewsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [Newsesolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
