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
  public items = ['Stories', 'Comments', 'Favourites'];
  public user: User;
  public usersStories: Story[];
  public usersComments: Comment[] = [];

  constructor(
    private storiesService: StoriesService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    const userId = this.route.snapshot.params["id"]

    this.storiesService.getUserById(userId).subscribe(userStories => {
      this.user = userStories;

      this.getUsersStories(this.user.submitted);
      this.getUsersComments(this.user.submitted);
    });
  }

  public toggleAccordion(event) {
    const element = event.target;
    element.classList.toggle('active');

    const panel = element.nextElementSibling;

    if (element.classList.contains('active')) {
      panel.style.maxHeight = '0px';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  private getUsersStories(usersSubmission) {
    usersSubmission.forEach(story => {
      this.storiesService.getStoryById(story).pipe(
        filter(story => story.type === 'story')
      )
      .subscribe(stories => {
        this.usersStories = [stories];
      });
    });
  }

  private getUsersComments(usersSubmission) {
    usersSubmission.forEach(commentId => {
      this.storiesService.getCommentsByUsersCommentId(commentId).pipe(
        filter(comment => comment?.type === 'comment'),
      )
      .subscribe((comments: Comment) => {
        this.usersComments.push(comments);
      });
    });
  }

}
