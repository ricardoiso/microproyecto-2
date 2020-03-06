import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  pageSize: string = '';

  baseUrl: string = 'https://api.rawg.io/api/'

  constructor(private http: HttpClient) { }

  getGameDetails(gameId) {
    let endpoint = `${this.baseUrl}games/${gameId}`;

    return this.http.get(endpoint);
  }

  getLatestGames() {
    let endpoint = `${this.baseUrl}games`;

    return this.http.get(endpoint);
  }

  getGenres() {
    let endpoint = `${this.baseUrl}genres`;

    return this.http.get(endpoint);
  }
}
