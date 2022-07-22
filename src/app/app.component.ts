import { Component } from '@angular/core';
import { Post } from './interfaces/reddit-api-model';
import { RedditApiService } from './reddit-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paupers-reddit-api';
  post: Post = {
    kind: "",
    data: { after:      "",
    dist:      0 ,
    modhash:    "",
    geo_filter: null,
    children:   null,
    before:     null}
  }


  constructor(private redditApiService:RedditApiService) {}

  ngOnInit(): void {
    this.redditApiService.fetchAllPosts().subscribe(data => {
      this.post = data;
    })
  }

}
