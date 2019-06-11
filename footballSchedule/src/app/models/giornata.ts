import { Match } from './match';

export class Giornata {
  public myMatches: Match[] = [];

  static fromJson(json: any): Giornata {
    let giornata:Giornata = new Giornata();

    for (let item of json.matches) {
      giornata.myMatches.push(Match.fromJson(item));
    }

    return giornata;
  }
}
