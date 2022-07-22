import { Component, Input, OnInit } from '@angular/core';
import { Child, ChildData, Post, PostData } from 'src/app/interfaces/reddit-api-model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input() postData: PostData = {
    after:      "",
    dist:      0 ,
    modhash:    "",
    geo_filter: null,
    children:   [],
    before:     null
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
