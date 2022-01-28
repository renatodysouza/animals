import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PetsService } from './pets.service';

describe('PetsService', () => {
  let service: PetsService;
  let httpClientMock = {
    get: () => {
      return of([]);
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: httpClientMock},
      ]
    });
    service = TestBed.inject(PetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should exist getPets', () => {
    expect(service.getPets()).toBeTruthy();
  });

});
