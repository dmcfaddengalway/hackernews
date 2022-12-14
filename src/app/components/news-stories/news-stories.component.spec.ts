import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsStoriesComponent } from './news-stories.component';

describe('NewsStoryComponent', () => {
  let component: NewsStoriesComponent;
  let fixture: ComponentFixture<NewsStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
