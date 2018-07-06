import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetVisuComponent } from './projet-visu.component';

describe('ProjetVisuComponent', () => {
  let component: ProjetVisuComponent;
  let fixture: ComponentFixture<ProjetVisuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetVisuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetVisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
