import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContextComponent } from './card-context.component';

describe('CardContextComponent', () => {
  let component: CardContextComponent;
  let fixture: ComponentFixture<CardContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
