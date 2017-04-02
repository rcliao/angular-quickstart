import { Component } from '@angular/core';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bambasto' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{title}}</h1>
    <h2>My heroes:</h2>
    <ul>
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <section *ngIf="selectedHero">
      <h2>{{selectedHero.name}} detail</h2>
      <div><label for="">Id:</label> {{selectedHero.id}}</div>
      <div>
        <label for="name">Name: </label>
        <input type="text" [(ngModel)]="selectedHero.name">
      </div>
    </section>
  `,
})
export class AppComponent  {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

export class Hero {
  id: number;
  name: string;
}

