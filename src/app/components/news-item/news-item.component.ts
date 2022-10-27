import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() story;

  public ngOnInit() {
    console.log(this.story);
  }
}
