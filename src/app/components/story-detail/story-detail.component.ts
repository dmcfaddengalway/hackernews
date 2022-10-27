import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Story } from '../../models/story';
import { StoriesService } from '../../services/stories-service.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent implements OnInit {
  public story: Story;

  constructor(
    private storiesService: StoriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const itemId = this.route.snapshot.params["id"]

    this.storiesService.getStoryById(itemId).subscribe(data => {
      const { kids, level } = data;

      this.story = data;
      this.story.comments = kids;
      this.story.points = level;
    });
  }

}
