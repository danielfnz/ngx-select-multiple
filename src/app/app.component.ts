import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  frutas = [
    {
      name: 'Banana',
      value: 0
    },
    {
      name: 'Laranja',
      value: 1
    },
    {
      name: 'Maracujá',
      value: 2
    },
    {
      name: 'Morango',
      value: 3
    },
    {
      name: 'Graviola',
      value: 4
    },
    {
      name: 'Manga',
      value: 5
    },
    {
      name: 'Limão',
      value: 6
    }
  ];

  carros = [
    {
      nomeCarro: 'BMW 301'
    },
    {
      nomeCarro: 'Gol g4'
    },
    {
      nomeCarro: 'Gol g5'
    },
    {
      nomeCarro: 'Fusca'
    },
    {
      nomeCarro: 'Uno'
    }
  ];

  cidades = [
    {
      nomeCidade: 'Goiania'
    },
    {
      nomeCidade: 'Uberlandia'
    },
    {
      nomeCidade: 'Anapolis'
    },
    {
      nomeCidade: 'Jatai'
    },
    {
      nomeCidade: 'Caldas novas'
    },
    {
      nomeCidade: 'São Paulo'
    }
  ];

  onValueChange(event) {
    console.log(event);
  }
}
