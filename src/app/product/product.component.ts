import {Component} from '@angular/core';
import {ProductSuggestionService} from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private productSuggestionService: ProductSuggestionService) {}

  get suggestions() {
    return this.productSuggestionService.suggestions;
  }

}
