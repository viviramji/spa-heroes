import { HeroesService } from './../../core/services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/core/models/heroe/heroe';

@Component({
  selector: 'app-found-hero-page',
  templateUrl: './found-hero-page.component.html',
  styleUrls: ['./found-hero-page.component.css'],
})
export class FoundHeroPageComponent implements OnInit {
  heroes: Heroe[] = [];
  searchValue: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.searchValue = params.searchValue;
      if (params.searchValue) {
        this.heroes = this.heroByName(params.searchValue);
      } else {
        this.heroes = this.getAllHeroes();
      }
    });
  }

  seeHeroe(id: string) {
    this.router.navigate(['/heroe', id]);
  }

  backHeroes() {
    this.router.navigate(['/heroes']);
  }

  getAllHeroes(): Heroe[] {
    return this.heroesService.getHeroes();
  }

  heroByName(searchValue: string): Heroe[] {
    return this.heroesService.getHeroeByName(searchValue);
  }
}
