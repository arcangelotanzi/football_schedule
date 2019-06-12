import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teams: Team[] = [];
  BASE_URL = 'http://api.football-data.org/v2/competitions/2019/teams';

  constructor(private http: HttpClient) { }

  getTeamList() {
    const url = this.BASE_URL;
    return this.http.get(url, { headers: { 'X-Auth-Token': '3f7baae8e7e04a779af756d912da901a' } }).pipe(map((response: any) => {
      console.log('TEAM_SERVICE_LOG: ', response.teams);
      return this.teams = response;
    }));
  }
}
