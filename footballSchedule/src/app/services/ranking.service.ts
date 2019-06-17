import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Ranking } from '../models/ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  BASE_URL = 'https://api.football-data.org/v2/competitions/2019/standings';

  constructor(private http: HttpClient) { }

  getRanking() {
    const url = this.BASE_URL;
    return this.http.get(url, {headers: {'X-Auth-Token': '3f7baae8e7e04a779af756d912da901a'}}).pipe(map((response: any) => {
      console.log('RANKING_SERVICE_LOG: ', response);
      return Ranking.fromJson(response);
    }));
  }
}
