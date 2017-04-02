import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <section *ngIf="hero">
      <h2>{{hero.name}} details</h2>
      <div>id: {{hero.id}}</div>
      <div>
        <label for="name">name:</label>
        <input type="text" [(ngModel)]="hero.name" placeholder="name">
      </div>
    </section>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
