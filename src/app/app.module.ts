import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// * Routes
import { APP_ROUTING } from './app-routing';

// * Services
import { HeroesService } from './core/services/heroes.service';

// * Components

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FoundHeroPageComponent } from './components/found-hero-page/found-hero-page.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    FoundHeroPageComponent,
    HeroeCardComponent,
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
