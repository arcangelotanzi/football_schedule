import { Team } from './team';

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

    currentMatch.id = json.id;
    currentMatch.stage = json.stage;
    currentMatch.matchDay = json.matchday;
    currentMatch.homeTeam = json.homeTeam;
    currentMatch.awayTeam = json.awayTeam;
    currentMatch.scoreHomeTeam = json.score.fullTime.homeTeam;
    currentMatch.scoreAwayTeam = json.score.fullTime.awayTeam;
    currentMatch.homePartial = json.score.halfTime.homeTeam;
    currentMatch.awayPartial = json.score.halfTime.awayTeam;
    currentMatch.currentMatch = json.season.currentMatchday;

    return currentMatch;

  }

}
