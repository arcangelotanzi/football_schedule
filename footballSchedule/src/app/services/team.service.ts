import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Team } from '../models/team';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  BASE_URL = 'http://api.football-data.org/v2/teams/';

  constructor(private http: HttpClient) { }

  getTeamDetails( idTeam ) {
    const url = this.BASE_URL + idTeam;
    return this.http.get(url, { headers: { 'X-Auth-Token': '3f7baae8e7e04a779af756d912da901a' } }).pipe(map((response: any) => {
      console.log('TEAM_SERVICE_LOG: ', response);
      return response; // this.teams = response;
    }));
  }
}
