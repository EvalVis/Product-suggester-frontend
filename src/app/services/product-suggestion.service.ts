import {Injectable} from "@angular/core";
import {Product} from "../models/product.model";
import {Answer} from "../models/answer.model";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductSuggestionService {

  products: Product[] = [];

  productSuggestionsUrl = 'http://localhost:8080/product-suggestions/';
  constructor(private http: HttpClient) {

  }

  getSuggestions(answer: Answer) {
    let answerWithoutClassHeader =
      {"ageRange": answer.ageRange, "studying": answer.isStudying, "incomeRange": answer.incomeRange};
    let result = this.http.post<Product[]>(this.productSuggestionsUrl, answerWithoutClassHeader);
    result.subscribe(products => this.products = products);
    return result;
  }

}
