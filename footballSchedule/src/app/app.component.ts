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
  loadComponent = false;
  showButton= true;

  receiveMessage(msg) {
    this.message = msg;
    console.log(this.message);
    this.loadComponent = false;
    this.showButton = false;
  }


  toggleChild() {
    this.loadComponent = !this.loadComponent;
    this.showButton = !this.showButton;
  }
}
