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
    const currentMatch: Match = new Match();
    // let teamTmp = new Team();
    // let teamHome = new Team();

    currentMatch.id = json.id;
    currentMatch.stage = json.stage;
    currentMatch.matchDay = json.matchday;
    currentMatch.homeTeam = json.homeTeam;
    currentMatch.awayTeam = json.awayTeam;
    currentMatch.scoreHomeTeam = json.score.fullTime.homeTeam; // ['fullTime']['homeTeam'];
    currentMatch.scoreAwayTeam = json.score.fullTime.awayTeam; // ['fullTime']['awayTeam'];
    currentMatch.homePartial = json.score.halfTime.homeTeam; // ['halfTime']['homeTeam'];
    currentMatch.awayPartial = json.score.halfTime.awayTeam; // ['halfTime']['awayTeam'];
    currentMatch.currentMatch = json.season.currentMatchday; // ['currentMatchday'];

    return currentMatch;

  }

}
