import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsStoryComponent } from './news-story.component';

describe('NewsStoryComponent', () => {
  let component: NewsStoryComponent;
  let fixture: ComponentFixture<NewsStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
