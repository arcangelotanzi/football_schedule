export class Player {
  public id: number;
  public name: string;
  public dateOfBirth: string;
  public nationality: string;
  public position: string;
  public shirtnumber: number;

  static fromJson(json: any): Player {
    const singlePlayer: Player = new Player();

    singlePlayer.id = json.id;
    singlePlayer.name = json.name;
    singlePlayer.nationality = json.nationality;
    singlePlayer.dateOfBirth = json.dateOfBirth;
    singlePlayer.position = json.position;
    singlePlayer.shirtnumber = json.shirtnumber;

    return singlePlayer;
  }

}

