import { Component, OnInit, Input } from '@angular/core';
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
  @Input() numeroGiornata;

  constructor(private matchService: MatchService) {
    console.log("ciao");

  }

  ngOnInit() {
  }

  getPartiteGiornata(numeroGiornata){
    this.matchService.getPartiteDellaGiornata(numeroGiornata).pipe()
      .subscribe(result => {
        this.giornantaCorrente = result;
      });
  }
}
