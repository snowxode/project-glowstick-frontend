import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsAndCsComponent } from './ts-and-cs.component';

describe('TsAndCsComponent', () => {
  let component: TsAndCsComponent;
  let fixture: ComponentFixture<TsAndCsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsAndCsComponent]
    });
    fixture = TestBed.createComponent(TsAndCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
