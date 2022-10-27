import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewsStoriesComponent } from './components/news-stories/news-stories.component';
import { StoriesService } from './services/stories-service.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { PipesModule } from './pipes/pipes.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StoryDetailComponent } from './components/story-detail/story-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterBarComponent,
    NavBarComponent,
    NewsItemComponent,
    NewsStoriesComponent,
    UserProfileComponent,
    StoryDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [
    {
      provide: StoriesService,
      useClass: StoriesService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
