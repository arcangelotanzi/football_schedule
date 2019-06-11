import { Team } from './team';
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
  matchDay: number;
  stage: string;
  homeTeam: Team;
  awayTeam: Team;
  scoreHomeTeam: string;
  scoreAwayTeam: string;
  homePartial: string;
  awayPartial: string;
  currentMatch: number;

  static fromJson(json: any): Match {
    let m: Match = new Match();
    let teamTmp = new Team();
    let teamHome = new Team();

    m.id = json.id;
    m.stage = json.stage;
    m.matchDay = json.matchday;
    m.homeTeam = json.homeTeam;
    m.awayTeam = json.awayTeam;
    m.scoreHomeTeam = json.score['fullTime']['homeTeam'];
    m.scoreAwayTeam = json.score['fullTime']['awayTeam'];
    m.homePartial = json.score['halfTime']['homeTeam'];
    m.awayPartial = json.score['halfTime']['awayTeam'];
    m.currentMatch = json.season['currentMatchday'];

    return m;

  }

}
