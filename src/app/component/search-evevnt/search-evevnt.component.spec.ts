import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEvevntComponent } from './search-evevnt.component';

describe('SearchEvevntComponent', () => {
  let component: SearchEvevntComponent;
  let fixture: ComponentFixture<SearchEvevntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchEvevntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEvevntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
