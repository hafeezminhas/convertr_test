import { TestBed } from '@angular/core/testing';

import { AdvertiserService } from './advertiser.service';
import {HttpClientModule} from '@angular/common/http';

describe('AdvertiserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [AdvertiserService]
  }));

  it('should be created', () => {
    const service: AdvertiserService = TestBed.get(AdvertiserService);
    expect(service).toBeTruthy();
  });
});
