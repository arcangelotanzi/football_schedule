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

  currentMatch: Match;
  giornantaCorrente: Giornata;
  @Input() numeroGiornata;

  constructor(private matchService: MatchService) { }

  ngOnInit() { }

  getPartiteGiornata(numeroGiornata) {
    if (numeroGiornata !== "" && numeroGiornata <= 38) {
      this.matchService.getPartiteDellaGiornata(numeroGiornata).pipe()
        .subscribe(result => {
          this.giornantaCorrente = result;
        });
    }
  }
}
