import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/core/models/heroe/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchHeroes(searchValue: string): Heroe[] {
    this.router.navigate(['/heroe-found', searchValue]);

    return undefined;
  }
}
