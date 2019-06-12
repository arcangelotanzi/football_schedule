import { Team } from './team';
import { RankingObject } from './rankingObject';

export class Ranking {
  rankingObject: RankingObject[] = [];

  static fromJson(json: any): Ranking {
    const ranking: Ranking = new Ranking();

    for (let item of json.standings[0].table) {
      ranking.rankingObject.push(RankingObject.fromJson(item));
    }

    return ranking;
  }
}
