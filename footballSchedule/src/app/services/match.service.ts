import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map } from 'rxjs/operators';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  BASE_URL : string='https://api.football-data.org/v2/matches';

  //matches: any[]=[];

  constructor(private http: HttpClient) { }

  getMatchInfo(id: number) {
    const url = this.BASE_URL + '/' + id;
    return this.http.get(url,{headers: {'X-Auth-Token': '3f7baae8e7e04a779af756d912da901a'}}).pipe(map((response: any) => {
      return Match.fromJson(response);
    }));

  }
}
