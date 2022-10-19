import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStoryComponent } from './base-story.component';

describe('BaseStoryComponent', () => {
  let component: BaseStoryComponent;
  let fixture: ComponentFixture<BaseStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
