import { Component, OnInit } from '@angular/core';
import { RankingService } from '../services/ranking.service';
import { Ranking } from '../models/ranking';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  apiKey = '3f7baae8e7e04a779af756d912da901a';

  ranking: Ranking;

  constructor(private rankingService: RankingService) {
    console.log("ciao");

    this.getRanking();
  }

  ngOnInit() {
  }

  getRanking(){
    this.rankingService.getRanking().pipe()
      .subscribe(result => {
        this.ranking = result;
      });
  }

}
