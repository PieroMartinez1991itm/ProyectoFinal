import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarDeAltaComponent } from './dar-de-alta.component';

describe('DarDeAltaComponent', () => {
  let component: DarDeAltaComponent;
  let fixture: ComponentFixture<DarDeAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarDeAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarDeAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
