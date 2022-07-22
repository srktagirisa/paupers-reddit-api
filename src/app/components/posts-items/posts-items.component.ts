import { Component, Input, OnInit } from '@angular/core';
import { ChildData } from 'src/app/interfaces/reddit-api-model';

@Component({
  selector: 'app-posts-items',
  templateUrl: './posts-items.component.html',
  styleUrls: ['./posts-items.component.css']
})
export class PostsItemsComponent implements OnInit {

  @Input() childData: ChildData = {
    title: "",
    thumbnail: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
