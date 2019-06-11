import { Player } from './player';

enum TeamStruct {
  id = 'id',
  name = 'name',
  shortName = 'shortName',
  tla = 'tla',
  address = 'address',
  website = 'website',
  phone = 'phone',
  email = 'email',
  founded = 'founded',
  clubColors = 'clubColors',
  venue = 'venue',
  squadPlayer = 'squad',
  crestUrl = 'crestUrl'

}

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
  public squadPlayer: Player[] = [];
  public crestUrl: string;

  static fromJson(json: any): Team {
    let team: Team = new Team();

    team.id = json[TeamStruct.id];
    team.name = json[TeamStruct.name];
    team.shortName = json[TeamStruct.shortName];
    team.tla = json[TeamStruct.tla];
    team.address = json[TeamStruct.address];
    team.website = json[TeamStruct.website];
    team.phone = json[TeamStruct.phone];
    team.email = json[TeamStruct.email];
    team.founded = json[TeamStruct.founded];
    team.clubColors = json[TeamStruct.clubColors];
    team.venue = json[TeamStruct.venue];
    team.crestUrl = json[TeamStruct.crestUrl]

    for (let item of json['squad']) {
      team.squadPlayer.push(Player.fromJson(item));
    }

    return team;
  }

}
