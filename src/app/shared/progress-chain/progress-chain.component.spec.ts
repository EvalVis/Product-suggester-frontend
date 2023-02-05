import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressChainComponent } from './progress-chain.component';

describe('ProgressChainComponent', () => {
  let component: ProgressChainComponent;
  let fixture: ComponentFixture<ProgressChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressChainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
