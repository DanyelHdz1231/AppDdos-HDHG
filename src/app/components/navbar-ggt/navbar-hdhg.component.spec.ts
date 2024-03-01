import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarhdhgComponent } from './navbar-hdhg.component';

describe('NavbarhdhgComponent', () => {
  let component: NavbarhdhgComponent;
  let fixture: ComponentFixture<NavbarhdhgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarhdhgComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarhdhgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
