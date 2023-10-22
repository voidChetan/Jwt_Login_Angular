import { TestBed } from '@angular/core/testing';

import { CustomeInterceptor } from './custome.interceptor';

describe('CustomeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CustomeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CustomeInterceptor = TestBed.inject(CustomeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
