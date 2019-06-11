import { Match } from './match';

/*export class Giornata {
  public myMatches: Match[] = [];

  static fromJson(json: any): Giornata {
    let giornata:Giornata = new Giornata();

    console.log(json);
    for (let item of json.matches) {
      console.log("ITEM: ", item);
      giornata.myMatches.push(item);
    }

    return giornata;
  }
}*/

export class Giornata {
  public myMatches: Match[] = [];

  static fromJson(json: any): Giornata {
    let giornata:Giornata = new Giornata();

    console.log(json);
    for (let item of json.matches) {
      console.log("ITEM: ", item);
      giornata.myMatches.push(Match.fromJson(item));
    }

    return giornata;
  }
}
