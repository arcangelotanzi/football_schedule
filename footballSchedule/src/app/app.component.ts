import { Component, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { RankingComponent } from './ranking/ranking.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  message: number;
  title = 'Football Schedule';

  receiveMessage(msg) {
    this.message = msg;
  }
}
