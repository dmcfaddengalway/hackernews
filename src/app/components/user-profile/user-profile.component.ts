import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { filter, map } from 'rxjs/operators';

import { StoriesService } from '../../services/stories-service.service';
import { User } from '../../models/user';
import { Story } from '../../models/story';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public user: User;
  public usersStories: Story[];

  constructor(
    private storiesService: StoriesService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    const userId = this.route.snapshot.params["id"]

    this.storiesService.getUserById(userId).subscribe(data => {
      this.user = data;
      console.log(this.user);
      this.getUsersStories(this.user.submitted);
    });
  }

  public toggleAccordion(event, index) {
    var element = event.target;
    element.classList.toggle("active");
    if (this.usersStories[index]) {
      // this.usersStories[index] = false;
    } else {
      // this.usersStories[index] = true;
    }
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  private getUsersStories(usersStories) {
    usersStories.forEach(story => {
      this.storiesService.getStoryById(story).pipe(
        filter(story => story.type === 'story')
      )
        .subscribe(stories => {
          this.usersStories = [stories];
          console.log(stories);
        })
    });
  }

}
