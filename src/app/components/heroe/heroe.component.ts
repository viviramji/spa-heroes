import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from './../../core/services/heroes.service';
import { Heroe } from 'src/app/core/models/heroe/heroe';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;

  constructor(
    private activateRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.activateRoute.params.subscribe((params) => {
      this.heroe = this.fetchHeroe(parseInt(params.id));
    });
  }

  ngOnInit(): void {}

  fetchHeroe(index: number): Heroe {
    return this.heroesService.fetchHero(index);
  }
}
