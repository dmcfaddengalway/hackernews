import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsStoriesComponent } from './components/news-stories/news-stories.component';
import { StoryDetailComponent } from './components/story-detail/story-detail.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: NewsStoriesComponent
  },
  {
    path: 'user/:id',
    component: UserProfileComponent
  },
  {
    path: 'item/:id',
    component: StoryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
