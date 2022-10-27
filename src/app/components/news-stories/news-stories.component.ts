import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { BaseStoryComponent } from '../base-story/base-story.component';
import { StoriesService } from '../../services/stories-service.service';

@Component({
  selector: 'app-news-stories',
  templateUrl: './news-stories.component.html',
  styleUrls: ['./news-stories.component.scss']
})
export class NewsStoriesComponent extends BaseStoryComponent implements OnInit {
  public storyIds = [];
  public stories = [];
  public topStories = [];
  public story: any;

  constructor(httpClient: HttpClient, storiesService: StoriesService) {
    super(httpClient, storiesService);
  }

  public async ngOnInit(): Promise<void> {
    this.storiesService.getAllNewsStories()
      .subscribe(stories => {
        this.storyIds = stories.slice(0, 20);

        this.storyIds.forEach(async storyId => {
          this.stories.push(await this.getStoryDetails(storyId));
        });
      });

    this.storiesService.getAllTopNewsStories()
      .subscribe(stories => {
        this.storyIds = stories.slice(0, 10);

        this.storyIds.forEach(async storyId => {
          this.topStories.push(await this.getStoryDetails(storyId));
        });
      });
  }

  public async getStoryDetails(storyId: string) {
    return await this.storiesService.getStoryById(storyId).toPromise()
  }
}
