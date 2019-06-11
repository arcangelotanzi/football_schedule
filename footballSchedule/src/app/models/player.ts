enum PlayerStruct {
  id = 'id',
  name = 'name',
  dateOfBirth = 'dateOfBirth',
  nationality = 'nationality',
  position = 'position',
  shirtnumber = 'shirtNumber'

}

export class Player {
  public id: number;
  public name: string;
  public dateOfBirth: string;
  public nationality: string;
  public position: string;
  public shirtnumber: number;

  static fromJson(json: any): Player {
    let singlePlayer: Player = new Player();

    singlePlayer.id = json[PlayerStruct.id];
    singlePlayer.name = json[PlayerStruct.name];
    singlePlayer.nationality = json[PlayerStruct.nationality];
    singlePlayer.dateOfBirth = json[PlayerStruct.dateOfBirth];
    singlePlayer.position = json[PlayerStruct.position];
    singlePlayer.shirtnumber = json[PlayerStruct.shirtnumber];

    return singlePlayer;


  }

}

