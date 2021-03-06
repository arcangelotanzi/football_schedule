import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RankingService } from '../services/ranking.service';
import { Ranking } from '../models/ranking';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  ranking: Ranking;
  @Output() clickedTeam = new EventEmitter();

  constructor(private rankingService: RankingService) {
    this.getRanking();
  }

  ngOnInit() {
  }

  getRanking() {
    this.rankingService.getRanking().pipe()
      .subscribe(result => {
        this.ranking = result;
      });
  }

  onClick(team) {
    this.clickedTeam.emit(team);
  }

}
