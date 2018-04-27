import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {TFCBaseComponent} from './tfcbase_sample.component';

describe('TFCBaseComponent', () => {

  let comp: TFCBaseComponent;
  let fixture: ComponentFixture<TFCBaseComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TFCBaseComponent],
    });

    fixture = TestBed.createComponent(TFCBaseComponent);
    comp = fixture.componentInstance;
    comp.locale = 'es';

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('span'));
    el = de.nativeElement;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have <span> text', () => {
    fixture.detectChanges();
    const span = de.nativeElement;
    expect(span.innerText).toBeDefined();
  });
});
