import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNewsComponent } from './public-news.component';

describe('PublicNewsComponent', () => {
  let component: PublicNewsComponent;
  let fixture: ComponentFixture<PublicNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
