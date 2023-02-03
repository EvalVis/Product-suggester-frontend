import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSuggesterComponent } from './product-suggester.component';

describe('ProductSuggesterComponent', () => {
  let component: ProductSuggesterComponent;
  let fixture: ComponentFixture<ProductSuggesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSuggesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSuggesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
