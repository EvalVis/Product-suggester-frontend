import {Injectable} from "@angular/core";
import {Product} from "../models/product.model";
import {Answer} from "../models/answer.model";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ProductSuggestionService {

  productSuggestionsUrl = 'http://localhost:8080/product-suggestions/';
  constructor(private http: HttpClient) {

  }

  getSuggestions(answer: Answer) {
    let answerWithoutClassHeader =
      {"ageRange": answer.ageRange, "studying": answer.isStudying, "incomeRange": answer.incomeRange};
    return this.http.post<Product[]>(this.productSuggestionsUrl, answerWithoutClassHeader);
  }

}
