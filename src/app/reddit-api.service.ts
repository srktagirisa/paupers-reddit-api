import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './interfaces/reddit-api-model';

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {

  constructor(private http: HttpClient) { }

  fetchAllPosts(): Observable<Post> {
    return this.http.get<Post>("https://www.reddit.com/r/aww/.json");
  }
}
