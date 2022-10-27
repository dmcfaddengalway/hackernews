import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  private readonly baseURL = 'https://hacker-news.firebaseio.com/v0/';

  private readonly newStoriesURL = `${this.baseURL}newstories.json?print=pretty`;
  private readonly topStoriesURL = `${this.baseURL}topstories.json?print=pretty`;
  private readonly bestStoriesURL = `${this.baseURL}beststories.json?print=pretty`;
  private readonly askStoriesURL = `${this.baseURL}askstories.json?print=pretty`;
  private readonly showStoriesURL = `${this.baseURL}showstories.json?print=pretty`;
  private readonly jobStoriesURL = `${this.baseURL}jobstories.json?print=pretty`;

  private readonly storyURL = `${this.baseURL}item/`;

  private readonly userURL = `${this.baseURL}user/`;

  constructor(private httpClient: HttpClient) { }

  public getAllNewsStories(): Observable<any> {
    return this.httpClient.get(this.newStoriesURL);
  }

  public getAllTopNewsStories(): Observable<any> {
    return this.httpClient.get(this.topStoriesURL);
  }

  public getAllBestNewsStories(): Observable<any> {
    return this.httpClient.get(this.bestStoriesURL);
  }

  public getAllAskStories(): Observable<any> {
    return this.httpClient.get(this.askStoriesURL);
  }

  public getAllShowStories(): Observable<any> {
    return this.httpClient.get(this.showStoriesURL);
  }

  public getAllJobStories(): Observable<any> {
    return this.httpClient.get(this.jobStoriesURL);
  }

  public getStoryById(id: string): Observable<any> {
    return this.httpClient.get(this.storyURL + id + '.json');
  }

  public getUserById(userId: string): Observable<any> {
    return this.httpClient.get(this.userURL + userId + '.json?print=pretty');
  }
}
