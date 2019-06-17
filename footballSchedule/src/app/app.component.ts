import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  message: number;
  title = 'Football Schedule';
  loadComponent = false;
  showButton = true;

  receiveMessage( msg ) {
    this.message = msg;
    this.loadComponent = false;
    this.showButton = false;
  }

  toggleChild() {
    this.loadComponent = !this.loadComponent;
    this.showButton = !this.showButton;
  }
}
