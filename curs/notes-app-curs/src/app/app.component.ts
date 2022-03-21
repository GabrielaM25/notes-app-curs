import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notes-app-curs';
  text: string = 'aBcD';
  dateTest: Date = new Date(8, 3, 2022);
  myValue: number = 10;
}
