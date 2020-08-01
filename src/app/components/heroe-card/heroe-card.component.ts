import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/core/models/heroe/heroe';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css'],
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() idx: number;

  @Output() heroSelected: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroSelected = new EventEmitter();
  }

  ngOnInit(): void {}

  seeHeroe() {
    this.heroSelected.emit(this.idx);
    /* this.router.navigate(['/heroe', this.idx]); */
  }
}
