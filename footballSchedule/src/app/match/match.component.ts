import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Match } from '../models/match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  apiKey = '3f7baae8e7e04a779af756d912da901a';
  currentMatch: Match;

  constructor(private matchService : MatchService) {
    console.log("ciao");
    this.matchService.getMatchInfo(1).pipe()
      .subscribe(p => {
        //this.x = p;
        this.currentMatch =p;
        console.log(this.currentMatch);
      });
  }

  ngOnInit() {
  }

}
