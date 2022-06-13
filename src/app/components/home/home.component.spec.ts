import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { findComponent } from '../../spec-helpers/element.spec-helper';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * rendert component
   */
  it('renders without errors', () => {
    expect(component).toBeTruthy();
  });

  /**
   * findet einen app-counter
   */
  describe('independent counter', () => {
    it('renders an independent counter', () => {
      const el = findComponent(fixture, 'app-counter');
      expect(el).toBeTruthy();
    });

    /**
     * findet einen app-counter mit wert 5
     */
    it('passes a start count', () => {
      const el = findComponent(fixture, 'app-counter');
      expect(el.properties.startCount).toBe(5);
    });

    /**
     * sendet einen countchange von 5 auf 5 auf einen appcounter
     * hat einen spy auf console.log
     * erwartet nach erhöhung entsprechende consolen ausgabe
     */
    it('listens for count changes', () => {
      spyOn(console, 'log');
      const el = findComponent(fixture, 'app-counter');
      const count = 5;
      el.triggerEventHandler('countChange', 5);
      expect(console.log).toHaveBeenCalledWith(
        'countChange event from CounterComponent',
        count,
      );
    });
  });

  /**
   * findet einen app-service-counter
   */
  it('renders a service counter', () => {
    const el = findComponent(fixture, 'app-service-counter');
    expect(el).toBeTruthy();
  });

  /**
   * findet einen app-ngrx-counter
   */
  it('renders a NgRx counter', () => {
    const el = findComponent(fixture, 'app-ngrx-counter');
    expect(el).toBeTruthy();
  });
});
