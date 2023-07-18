import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageResponse } from '../interfaces/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  url = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) { }

  getImage(): Observable<ImageResponse> {
    return this.http.get<ImageResponse>(this.url);
  }
}
