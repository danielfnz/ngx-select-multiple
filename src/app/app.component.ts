import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items = [{
    name: 'Banana',
    value: 0,
  }, {
    name: 'Laranja',
    value: 1,
  }, {
    name: 'Maracujá',
    value: 2,
  }, {
    name: 'Morango',
    value: 3,
  }, {
    name: 'Graviola',
    value: 4,
  }, {
    name: 'Manga',
    value: 5,
  }, {
    name: 'Limão',
    value: 6,
  }
  ];

  onValueChange(event) {
    console.log(event);
  }
}
