//import { Team } from './team';
//import { navigationCancelingError } from '@angular/router/src/shared';


enum MatchStruct {
  id = 'id',
  utcDate = 'utcDate',
  status = 'status',
  minute = 'minute',
  attendance = 'attendance',
  venue = 'venue',
  matchday = 'matchday',
  stage = 'stage',

}

export class Match {
  id: number;
  utcDate: string;
  status: string;
  minute: string;
  attendance: number;
  venue: string;
  matchday: number;
  stage: string;
  homeTeam: any;
  awayTeam: any;
  scorehome: string;
  scoreaway: string;
  homepartial: string;
  awaypartial: string;
  currentMatch: number;

  static fromJson(json: any): Match {
    let m: Match = new Match();

    m.id = json.match.id;
    m.stage = json.stage;
    m.matchday = json.match.matchday;
    m.homeTeam = json.match.homeTeam;
    m.awayTeam = json.match.awayTeam;


    //console.log(json['matches']);
    return m;

  }

}
