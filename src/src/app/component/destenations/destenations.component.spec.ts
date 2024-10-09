import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestenationsComponent } from './destenations.component';

describe('DestenationsComponent', () => {
  let component: DestenationsComponent;
  let fixture: ComponentFixture<DestenationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestenationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestenationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
