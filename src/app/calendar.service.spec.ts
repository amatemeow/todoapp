import { TestBed } from '@angular/core/testing';

import { DayService } from './calendar.service';

describe('DayService', () => {
  let service: DayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
