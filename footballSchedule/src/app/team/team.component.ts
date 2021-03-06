import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() idTeam: number;
  currentTeam: Team;
  changeLog: any[] = [];
  loadComponent = false;
  message: number;

  constructor(private teamService: TeamService) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.idTeam);
    this.getTeamDetails(this.idTeam);
  }

  getTeamDetails(idTeam) {
    this.teamService.getTeamDetails(idTeam).pipe()
      .subscribe(result => {
        this.currentTeam = Team.fromJson(result);
      }
      );
  }
  receiveMessage(msg) {
    this.message = msg;
    console.log(this.message);
    this.loadComponent = false;
  }


  toggleChild() {
    this.loadComponent = !this.loadComponent;
  }

}
