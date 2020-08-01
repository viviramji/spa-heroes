import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundHeroPageComponent } from './found-hero-page.component';

describe('FoundHeroPageComponent', () => {
  let component: FoundHeroPageComponent;
  let fixture: ComponentFixture<FoundHeroPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundHeroPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundHeroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
