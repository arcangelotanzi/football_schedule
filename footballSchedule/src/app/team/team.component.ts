import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teamList: Team [] = [];

  constructor(private teamService: TeamService) {
    this.getRanking();
  }

  ngOnInit() {
  }

  getRanking(){
    this.teamService.getTeamList().pipe()
      .subscribe(result => {
        console.log("xx", result);
        for (let item of result.teams) {
          this.teamList.push(Team.fromJson(item));
        }
      });

  }

}
