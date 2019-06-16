import { Player } from './player';

export class Team {
  public id: number;
  public name: string;
  public shortName: string;
  public tla: string;
  public address: string;
  public website: string;
  public phone: string;
  public email: string;
  public founded: number;
  public clubColors: string;
  public venue: string;
  public crestUrl: string;
  public squad: Player[] = [];
  public coach: string;

  static fromJson(json: any): Team {
    const team: Team = new Team();

    team.id = json.id;
    team.name = json.name;
    team.shortName = json.shortName;
    team.tla = json.tla;
    team.address = json.address;
    team.website = json.website;
    team.phone = json.phone;
    team.email = json.email;
    team.founded = json.founded;
    team.clubColors = json.clubColors;
    team.venue = json.venue;
    team.crestUrl = json.crestUrl;

    if (json.squad !== undefined) {
      for (let player of json.squad) {
        if (player.role == "COACH") {
          team.coach = player.name;
        }
        else {
          team.squad.push(Player.fromJson(player));
        }
      }
      //team.squad = json.squad;
    }

    return team;
  }
}
