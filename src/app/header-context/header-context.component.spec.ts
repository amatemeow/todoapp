import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContextComponent } from './header-context.component';

describe('HeaderContextComponent', () => {
  let component: HeaderContextComponent;
  let fixture: ComponentFixture<HeaderContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
