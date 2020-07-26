import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Heroe } from 'src/app/core/models/heroe/heroe';
import { HeroesService } from './../../core/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  seeHeroe(id: number): void {
    this.router.navigate(['/heroe', id]);
  }
}
