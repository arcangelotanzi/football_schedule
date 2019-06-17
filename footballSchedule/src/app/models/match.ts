import { Team } from './team';

export class Match {
  public id: number;
  public utcDate: string;
  public status: string;
  public minute: string;
  public attendance: number;
  public venue: string;
  public matchDay: number;
  public stage: string;
  public homeTeam: Team;
  public awayTeam: Team;
  public scoreHomeTeam: string;
  public scoreAwayTeam: string;
  public homePartial: string;
  public awayPartial: string;
  public currentMatch: number;

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
