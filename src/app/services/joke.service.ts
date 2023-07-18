import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JokeResponse } from '../interfaces/apiResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  url = 'https://official-joke-api.appspot.com/random_joke';

  constructor(private http: HttpClient) { }

  getJoke(): Observable<JokeResponse> {
    return this.http.get<JokeResponse>(this.url);
  }
}
