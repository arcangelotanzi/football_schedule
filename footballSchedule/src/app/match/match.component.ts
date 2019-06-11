import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Match } from '../models/match';
import { Giornata } from '../models/giornata';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  apiKey = '3f7baae8e7e04a779af756d912da901a';
  currentMatch: Match;
  giornantaCorrente: Giornata;

  constructor(private matchService: MatchService) {
    console.log("ciao");
    /*this.matchService.getMatchInfo(2).pipe()
      .subscribe(p => {
        //this.x = p;
        this.currentMatch = p;
        console.log(this.currentMatch);
      });*/

    /*this.matchService.getPartiteDellaGiornata(1).pipe()
      .subscribe(p => {
        //this.x = p;
        this.giornantaCorrente = p;
        console.log("component: ", this.giornantaCorrente);
      });*/

    this.matchService.getPartiteDellaGiornata(1).pipe()
      .subscribe(p => {
        //this.x = p;
        this.giornantaCorrente = p;
        console.log("component: ", this.giornantaCorrente);
      });
  }

  ngOnInit() {
  }

}
