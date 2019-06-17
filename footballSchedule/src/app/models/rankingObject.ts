import { Team } from './team';

export class RankingObject {
  public position: number;
  public team: Team= new Team();
  public playedGames: number;
  public won: number;
  public draw: number;
  public lost: number;
  public points: number;
  public goalsFor: number;
  public goalsAgainst: number;
  public goalDifference: number;

  static fromJson(json: any): RankingObject {
    const rankingObject: RankingObject = new RankingObject();

    rankingObject.position = json.position;
    rankingObject.team.id = json.team.id;
    rankingObject.team.name = json.team.name;
    rankingObject.team.crestUrl = json.team.crestUrl;
    rankingObject.playedGames = json.playedGames;
    rankingObject.won = json.won;
    rankingObject.draw = json.draw;
    rankingObject.lost = json.lost;
    rankingObject.points = json.points;
    rankingObject.goalsFor = json.goalsFor;
    rankingObject.goalsAgainst = json.goalsAgainst;
    rankingObject.goalDifference = json.goalDifference;

    return rankingObject;
  }
}
