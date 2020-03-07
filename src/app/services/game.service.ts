import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  pageSize: string = 'https://api.rawg.io/api/games?page_size=';

  baseUrl: string = 'https://api.rawg.io/api/games';

  constructor(private http: HttpClient, ) { }

  getGameDetails(gameId) {
    let endpoint = `${this.baseUrl}/${gameId}`;

    return this.http.get(endpoint);
  }

  getLatestGames(size) {
    let endpoint = `${this.pageSize}/${size}`;

    return this.http.get(endpoint);
  }

  getGenres() {
    let endpoint = `${this.baseUrl}genres`;

    return this.http.get(endpoint);
  }
}
