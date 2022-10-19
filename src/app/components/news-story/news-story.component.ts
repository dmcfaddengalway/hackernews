import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { BaseStoryComponent } from '../base-story/base-story.component';
import { StoriesService } from '../../services/stories-service.service';

@Component({
  selector: 'app-news-story',
  templateUrl: './news-story.component.html',
  styleUrls: ['./news-story.component.scss']
})
export class NewsStoryComponent extends BaseStoryComponent implements OnInit {
  public stories = [];
  public topStories = [];
  public story: any;

  constructor(httpClient: HttpClient, storiesService: StoriesService) {
    super(httpClient, storiesService);
  }

  ngOnInit(): void {
    this.storiesService.getAllNewsStories()
      .subscribe(stories => {
        this.stories = stories;
        console.log(this.stories);
      });

    this.storiesService.getAllTopNewsStories()
      .subscribe(stories => {
        this.topStories = stories;
        console.log(this.topStories);
      });

    this.storiesService.getStoryById('33267968')
      .subscribe(story => {
        this.story = story;
        console.log(this.story);
      });
  }

}
