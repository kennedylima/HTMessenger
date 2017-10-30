import { TestBed, inject } from '@angular/core/testing';

import { ConversaService } from './conversa.service';

describe('ConversaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversaService]
    });
  });

  it('should be created', inject([ConversaService], (service: ConversaService) => {
    expect(service).toBeTruthy();
  }));
});
