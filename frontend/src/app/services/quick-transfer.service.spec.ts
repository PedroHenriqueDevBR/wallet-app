import { TestBed } from '@angular/core/testing';

import { QuickTransferService } from './quick-transfer.service';

describe('QuickTransferService', () => {
  let service: QuickTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
