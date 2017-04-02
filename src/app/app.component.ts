import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{title}}</h1>
    <h2>{{hero.name}} detail</h2>
    <div>
      <label for="name">Name: </label>
      <input type="text" [(ngModel)]="hero.name" placeholder="name">
    </div>
  `,
})
export class AppComponent  {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}

export class Hero {
  id: number;
  name: string;
}

