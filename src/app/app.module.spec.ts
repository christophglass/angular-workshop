import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { AppModule } from './app.module';

describe('AppModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  /**
   * prüft einfach nur ob das Modul geladen wurde
   */
  it('initializes', () => {
    const appModule = TestBed.inject(AppModule);
    expect(appModule).toBeTruthy();
  });
});
