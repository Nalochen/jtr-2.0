import { TestBed } from '@angular/core/testing';

import { AspectRatioService } from './aspect-ratio.service';

describe('AspectRatioService', () => {
  let service: AspectRatioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AspectRatioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('extracts data from xml', () => {
    const xml = '<svg viewBox="0 0 1 2"></svg>';
    expect(service.extract(xml)).toBe('1 / 2');
  });

  it('fallbacks to "auto" on non xml', () => {
    const xml = 'foobar';
    expect(service.extract(xml)).toBe('auto');
  });

  it('fallbacks to "auto" on svg with broken viewBox', () => {
    const xml = '<svg viewBox="foo"></svg>';
    expect(service.extract(xml)).toBe('auto');
  });
});
