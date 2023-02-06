import {Component} from '@angular/core';
import {Product} from "../models/product.model";
import {ProductSuggestionService} from "../services/product-suggestion.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private productSuggestionService: ProductSuggestionService) {}

  get products() {
    return this.productSuggestionService.products;
  }

}
